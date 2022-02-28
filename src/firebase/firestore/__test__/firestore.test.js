import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from "@firebase/rules-unit-testing";
import { readFileSync } from "fs";
import {
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
} from "firebase/firestore";
import path from "path";
import { addUserAdmin, addServiceAdmin, getRandomKey } from "./helpers";

let testEnv;

const envConfig = {
  projectId: "kira-freelancer-app",
  firestore: {
    host: "localhost",
    port: 8080,
    rules: readFileSync(path.join(__dirname, "../firestore.rules"), "utf8"),
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
  let auth;
  let unauth;
  let userRef;
  let userData;
  let serviceRef;
  let serviceData;

  beforeAll(() => {
    auth = testEnv.authenticatedContext(uid).firestore();
    unauth = testEnv.unauthenticatedContext().firestore();
  });
  beforeEach(async () => {
    userData = {
      displayName: "Authed User",
      photoURL: "https://picsum.photos/100?random=1",
      email: "user@email.com",
      title: "",
      location: "",
      about: "",
      qualifications: [],
      skills: [],
      phone: "",
      isServiceProvider: "false",
      createdAt: serverTimestamp(),
      changedAt: new Timestamp(0),
    };
    await addUserAdmin(testEnv, userData, uid);
    userRef = doc(auth, "users", uid);

    serviceData = {
      title: "Title",
      images: ["https://picsum.photos/500?random=2", "https://picsum.photos/500?random=3"],
      description: "brief description",
      details: "lengthy details",
      etd: "turn around time",
      price: 5,
      revisions: 2,
      perks: [],
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
        expect(await assertSucceeds(updateDoc(serviceRef, { description: "new desc" })));
      });

      test("deny updating services for unauthed users", async () => {
        expect(await assertFails(updateDoc(doc(unauth, "services", "service"), {})));
      });

      test("deny updating another user's service", async () => {
        await addUserAdmin(testEnv, userData, "otherUser");
        const otherService = {
          ...serviceData,
          provider: { ...serviceData.provider, uid: "otherUser" },
        };
        await addServiceAdmin(testEnv, otherService, "newServiceID");
        const otherServiceRef = doc(auth, "services", "newServiceID");

        expect(await assertFails(updateDoc(otherServiceRef, { description: "new desc" })));
      });

      test("deny updating with additional fields", async () => {
        expect(await assertFails(updateDoc(serviceRef, { newField: "" })));
        expect(await assertFails(updateDoc(serviceRef, { "provider.newField": "" })));
      });

      test("deny updating provider info", async () => {
        expect(await assertFails(updateDoc(serviceRef, { "provider.displayName": "New Name" })));

        expect(await assertFails(updateDoc(serviceRef, { "provider.uid": deleteField() })));
      });

      test("deny updating with deletion of a field", async () => {
        expect(await assertFails(updateDoc(serviceRef, { details: deleteField() })));
      });

      test("deny updating with wrong logic and limits", async () => {
        expect(await assertFails(updateDoc(serviceRef, { price: -1 })));
      });
    });

    describe("users collection", () => {
      let changedUserData;
      beforeEach(() => {
        changedUserData = {
          displayName: "New Name",
        };
      });

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

      test("allow updates for authed users", async () => {
        expect(await assertSucceeds(updateDoc(userRef, changedUserData)));
      });

      test("deny updates to restricted fields", async () => {
        expect(await assertFails(updateDoc(userRef, { isServiceProvider: false })));
        expect(await assertFails(updateDoc(userRef, { createdAt: serverTimestamp() })));
        expect(await assertFails(updateDoc(userRef, { changedAt: serverTimestamp() })));
      });

      test("deny updates for unauthed users", async () => {
        expect(
          await assertFails(updateDoc(doc(unauth, "users", uid), { displayName: "New Name" })),
        );
      });

      test("deny users from updating another user's data", async () => {
        const otherUser = doc(auth, "users/otherUser");
        expect(await assertFails(updateDoc(otherUser, changedUserData)));
      });

      test("deny updates with invalid values", async () => {
        expect(await assertFails(updateDoc(userRef, { ...changedUserData, displayName: 5 })));
        expect(
          await assertFails(
            updateDoc(userRef, {
              ...changedUserData,
              displayName: "#".repeat(51),
            }),
          ),
        );
        expect(
          await assertFails(
            updateDoc(userRef, {
              ...changedUserData,
              title: "  untrimmed  ",
            }),
          ),
        );
      });

      test("deny updates to normalized values too frequently", async () => {
        updateDoc(userRef, changedUserData);

        // cloud functions simulator
        await testEnv.withSecurityRulesDisabled(async (context) => {
          const db = context.firestore();
          await updateDoc(doc(db, `users/${uid}`), { changedAt: serverTimestamp() });
        });

        expect(
          await assertFails(
            updateDoc(userRef, {
              displayName: "Another New Name",
            }),
          ),
        );

        expect(
          await assertFails(
            updateDoc(userRef, {
              photoURL: "new photo link",
            }),
          ),
        );

        expect(
          await assertSucceeds(
            updateDoc(userRef, {
              title: "this isn't normalized",
            }),
          ),
        );
      });
    });
  });
});
