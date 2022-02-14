const admin = require("firebase-admin");
process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
// process.env.FIREBASE_STORAGE_EMULATOR_HOST = "localhost:9199";
const path = require("path");
const {clearFirestore} = require(path.join(__dirname, "helpers"));
const testEnv = require("firebase-functions-test")();
let myFunctions;
let db;

beforeAll(() => {
  myFunctions = require("../index");
  db = admin.firestore();
});

afterEach(async () => clearFirestore(db));

afterAll(() => {
  testEnv.cleanup();
});

test("check change displayName", async () => {
  const batch = db.batch();

  // create user and create services properly
  for (let i = 0; i < 100; i++) {
    const service = db.doc(`services/service${i}`);
    batch.set(service, {
      provider: {uid: "user", displayName: "Name", photoURL: "link", email: "phone"},
    });
  }
  await batch.commit();

  const displayName = "Name";
  const changedName = "New Name";

  const userBefore = testEnv.firestore.makeDocumentSnapshot({displayName}, "users/user");
  const userAfter = testEnv.firestore.makeDocumentSnapshot(
      {displayName: changedName},
      "users/user",
  );
  const change = testEnv.makeChange(userBefore, userAfter);
  const wrapped = testEnv.wrap(myFunctions.updateNormalizedData);

  await wrapped(change);

  db.collection("services")
      .where("provider.uid", "==", "user")
      .get()
      .then((querySnap) => {
        querySnap.forEach((service) => {
          expect(service.get("provider.displayName")).toBe(changedName);
        });
      });
});

test("record is being created for on user auth with fields", async () => {
  const auth = testEnv.auth.makeUserRecord({
    uid: "user",
    displayName: "User",
  });
  const wrapped = testEnv.wrap(myFunctions.createUserRecord);
  await wrapped(auth);

  const user = await db.doc(`users/${auth.uid}`).get();
  expect(user.exists).toBe(true);
  expect(user.get("displayName")).toBe("User");
  expect(user.get("isServiceProvider")).toBe(false);
});

test("should update provider status when service is added", async () => {
  const user = db.collection("users").doc("user");
  await user.set({isServiceProvider: false});

  const service = testEnv.firestore.makeDocumentSnapshot(
      {provider: {uid: "user"}},
      "services/service",
  );

  const wrapped = testEnv.wrap(myFunctions.updateProviderStatus);
  await wrapped(service);

  const isProvider = await user.get().then((d) => d.get("isServiceProvider"));
  expect(isProvider).toBe(true);
});
