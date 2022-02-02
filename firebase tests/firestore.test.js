const {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} = require("@firebase/rules-unit-testing");
const { readFileSync } = require("fs");
const {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  deleteField,
  Timestamp,
} = require("firebase/firestore");
const { addUserAdmin, addServiceAdmin, getRandomKey } = require("./helpers");

let testEnv;

const envConfig = {
  projectId: "fireship-firebase-basics-d77c5",
  firestore: {
    host: "localhost",
    port: 8080,
    rules: readFileSync("firestore.rules", "utf8"),
  },
};

beforeAll(async () => {
  testEnv = await initializeTestEnvironment(envConfig);
  return true;
});
afterAll(async () => {
  await testEnv.cleanup();
  return true;
});

describe("firestore security rules", () => {
  const uid = "AuthedUserId";
  let auth, unauth;
  let userRef, userData;
  let serviceRef, serviceData;

  beforeAll(() => {
    auth = testEnv.authenticatedContext(uid).firestore();
    unauth = testEnv.unauthenticatedContext().firestore();
  });
  beforeEach(async () => {
    userData = {
      displayName: "Authed User",
      photoURL: "https://picsum.photos/100?random=1",
    };
    await addUserAdmin(testEnv, userData, uid);
    userRef = doc(auth, "users", uid);

    serviceData = {
      title: "Title",
      images: [
        "https://picsum.photos/500?random=2",
        "https://picsum.photos/500?random=3",
      ],
      description: "brief description",
      details: "lengthy details",
      etd: "turn around time",
      price: 5,
      revisions: 2,
      tags: ["tags", "improve", "search"],
      provider: {
        displayName: userData.displayName,
        photoURL: userData.photoURL,
        uid: userRef.id,
      },
    };
    await addServiceAdmin(testEnv, serviceData, "serviceId");
    serviceRef = doc(auth, "services", "serviceId");
    return true;
  });
  afterEach(async () => {
    await testEnv.clearFirestore();
    return true;
  });

  test("deny reading arbituary documents", async () => {
    const docRef = doc(auth, "some-collection", "some-id");
    expect(await assertFails(getDoc(docRef)));
  });

  test("deny writting arbituary documents", async () => {
    const docRef = doc(auth, "some-collection", "some-id");
    expect(await assertFails(setDoc(docRef, {})));
  });

  describe("services collection", () => {
    let services;
    beforeAll(() => {
      services = collection(auth, "services");
    });

    test("allow reads", async () => {
      const service = doc(unauth, "services", "some-document");
      expect(await assertSucceeds(getDoc(service)));
    });

    test("deny deleting service", async () => {
      expect(await assertFails(deleteDoc(serviceRef)));
    });

    describe("creating service", () => {
      test("allow creating service for authed users", async () => {
        expect(await assertSucceeds(addDoc(services, serviceData)));
      });

      test("deny creating service for unauthed users", async () => {
        const services = collection(unauth, "services");
        expect(await assertFails(addDoc(services, serviceData)));
      });

      test("deny creating service with missing fields", async () => {
        expect(await assertFails(addDoc(services, {})));
      });

      test("deny creating with null fields", async () => {
        const randomKey = getRandomKey(serviceData);
        const serviceWithNull = { ...serviceData, [randomKey]: null };
        expect(await assertFails(addDoc(services, serviceWithNull)));

        const randomProviderKey = getRandomKey(serviceData.provider);
        const serviceProviderWithNull = {
          ...serviceData,
          provider: { ...serviceData.provider, [randomProviderKey]: null },
        };
        expect(await assertFails(addDoc(services, serviceProviderWithNull)));
      });

      test("deny wrong logic and datatypes", async () => {
        let wrongData = { ...serviceData, user: "not map" };
        expect(await assertFails(addDoc(services, wrongData)));

        wrongData = { ...serviceData, displayName: "#".repeat(51) };
        expect(await assertFails(addDoc(services, wrongData)));

        wrongData = { ...serviceData, description: "  not trimmed" };
        expect(await assertFails(addDoc(services, wrongData)));

        wrongData = { ...serviceData, tags: 42 };
        expect(await assertFails(addDoc(services, wrongData)));

        wrongData = { ...serviceData, price: -10 };
        expect(await assertFails(addDoc(services, wrongData)));
      });

      test("deny create with spoofed provider", async () => {
        let wrongData = {
          ...serviceData,
          provider: { ...serviceData.provider, displayName: "some other name" },
        };
        expect(await assertFails(addDoc(services, wrongData)));

        wrongData = {
          ...serviceData,
          provider: { ...serviceData.provider, uid: "someOtherUID" },
        };
        expect(await assertFails(addDoc(services, wrongData)));

        wrongData = {
          ...serviceData,
          provider: {
            ...serviceData.provider,
            photoURL: "https://picsum.photos/100",
          },
        };
        expect(await assertFails(addDoc(services, wrongData)));
      });
    });

    describe("updating services", () => {
      test("allow updating service for authed user", async () => {
        expect(
          await assertSucceeds(
            updateDoc(serviceRef, { description: "new desc" })
          )
        );
      });

      test("deny updating services for unauthed users", async () => {
        expect(
          await assertFails(updateDoc(doc(unauth, "services", "service"), {}))
        );
      });

      test("deny updating another user's service", async () => {
        await addUserAdmin(testEnv, userData, "otherUser");
        const otherService = {
          ...serviceData,
          provider: { ...serviceData.provider, uid: "otherUser" },
        };
        await addServiceAdmin(testEnv, otherService, "newServiceID");
        const otherServiceRef = doc(auth, "services", "newServiceID");

        expect(
          await assertFails(
            updateDoc(otherServiceRef, { description: "new desc" })
          )
        );
      });

      test("deny updating with additional fields", async () => {
        expect(await assertFails(updateDoc(serviceRef, { newField: "" })));
        expect(
          await assertFails(updateDoc(serviceRef, { "provider.newField": "" }))
        );
      });

      test("deny updating provider info", async () => {
        expect(
          await assertFails(
            updateDoc(serviceRef, { "provider.displayName": "New Name" })
          )
        );

        expect(
          await assertFails(
            updateDoc(serviceRef, { "provider.uid": deleteField() })
          )
        );
      });

      test("deny updating with deletion of a field", async () => {
        expect(
          await assertFails(updateDoc(serviceRef, { details: deleteField() }))
        );
      });

      test("deny updating with wrong logic and limits", async () => {
        expect(await assertFails(updateDoc(serviceRef, { price: -1 })));
      });
    });

    describe("users collection", () => {
      let changedUserData;
      beforeEach(
        () =>
          (changedUserData = {
            displayName: "New Name",
            changedAt: serverTimestamp(),
          })
      );

      test("allow reads", async () => {
        const otherUser = doc(unauth, "users/otherUser");
        expect(await assertSucceeds(getDoc(otherUser)));
      });

      test("deny deletes", async () => {
        expect(await assertFails(deleteDoc(userRef)));
      });

      test("deny creates", async () => {
        const ref = doc(auth, "users/newUser");
        expect(await assertFails(setDoc(userRef, {})));
      });

      test("allow updates to displayName for authed users", async () => {
        expect(await assertSucceeds(updateDoc(userRef, changedUserData)));
      });

      test("deny updates to displayName without a timestamp", async () => {
        expect(
          await assertFails(updateDoc(userRef, { displayName: "no time" }))
        );
      });

      test("deny updates to any other field", async () => {
        expect(
          await assertFails(updateDoc(userRef, { isServiceProvider: false }))
        );
      });

      test("deny updates for unauthed users", async () => {
        expect(
          await assertFails(
            updateDoc(doc(unauth, "users", uid), { displayName: "New Name" })
          )
        );
      });

      test("deny users from updating another user's displayName", async () => {
        const otherUser = doc(auth, "users/otherUser");
        expect(await assertFails(updateDoc(otherUser, changedUserData)));
      });

      test("deny updates with invalid displayName", async () => {
        expect(
          await assertFails(
            updateDoc(userRef, { ...changedUserData, displayName: 5 })
          )
        );
        expect(
          await assertFails(
            updateDoc(userRef, {
              ...changedUserData,
              displayName: "#".repeat(51),
            })
          )
        );
        expect(
          await assertFails(
            updateDoc(userRef, {
              ...changedUserData,
              displayName: "  untrimmed  ",
            })
          )
        );
      });

      test("deny updates with spoofed timestamp", async () => {
        const timestamp = new Timestamp(1643839322); //2022/2/2 22:22
        const wrongData = { ...changedUserData, changedAt: timestamp };
        expect(await assertFails(updateDoc(userRef, wrongData)));
      });

      test("deny updates too frequently", async () => {
        updateDoc(userRef, changedUserData);
        expect(
          await assertFails(
            updateDoc(userRef, {
              ...changedUserData,
              displayName: "Another New Name",
            })
          )
        );
      });
    });
  });
});
