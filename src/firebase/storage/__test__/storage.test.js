import path from "path";
import { readFileSync } from "fs";
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from "@firebase/rules-unit-testing";
import { ref, deleteObject, uploadBytes, getDownloadURL } from "firebase/storage";
import { deleteInStorage } from "./helpers";

const envConfig = {
  projectId: "kira-freelancer-app",
  storage: {
    host: "localhost",
    port: 9199,
    rules: readFileSync(path.join(__dirname, "../storage.rules"), "utf8"),
  },
};

const img = readFileSync(path.join(__dirname, "pic.webp"));
const uid = "authedUser";
const serviceUID = "service";
let testEnv;
let auth;
let unauth;
let profileRef;
let serviceRef;
beforeAll(async () => {
  testEnv = await initializeTestEnvironment(envConfig);
  auth = testEnv.authenticatedContext(uid).storage();
  unauth = testEnv.unauthenticatedContext().storage();
});
beforeEach(async () => {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    const storage = context.storage();
    profileRef = ref(storage, `${uid}/profile.webp`);
    serviceRef = ref(storage, `${uid}/${serviceUID}/img.webp`);
    await uploadBytes(profileRef, img);
    await uploadBytes(serviceRef, img);
  });
  profileRef = ref(auth, `${uid}/profile.webp`);
  serviceRef = ref(auth, `${uid}/${serviceUID}/img.webp`);
});
afterEach(async () => testEnv.clearStorage());
afterAll(async () => testEnv.cleanup());

test("allow reading profile picture", async () => {
  expect(await assertSucceeds(getDownloadURL(profileRef)));
});

test("allow reading service images", async () => {
  expect(await assertSucceeds(getDownloadURL(serviceRef)));
});

test("deny unauth reads", async () => {
  profileRef = ref(unauth, `${uid}/profile.webp`);
  serviceRef = ref(unauth, `${uid}/${serviceUID}/img.webp`);
  expect(await assertFails(getDownloadURL(profileRef)));
  expect(await assertFails(getDownloadURL(serviceRef)));
});

test("allow delete of profile pic", async () => {
  expect(await assertSucceeds(deleteObject(profileRef)));
});

test("deny deletion of services", async () => {
  expect(await assertFails(deleteObject(serviceRef)));
});

test("deny unauthed delete of profile pic", async () => {
  profileRef = ref(unauth, `${uid}/profile.webp`);
  expect(await assertFails(deleteObject(profileRef)));
});

test("deny deleting someone else's profile photo", async () => {
  const otherAuthRef = ref(auth, "otherAuth/profile.webp");
  expect(await assertFails(deleteObject(otherAuthRef)));

  const otherAuth = testEnv.authenticatedContext("otherAuth").storage();
  profileRef = ref(otherAuth, profileRef.fullPath);
  expect(await assertFails(deleteObject(profileRef)));
});

test("allow uploading of images for authed users", async () => {
  deleteInStorage(testEnv, profileRef.fullPath);
  const metadata = { contentType: "image/webp" };
  expect(await assertSucceeds(uploadBytes(profileRef, img, metadata)));

  deleteInStorage(testEnv, profileRef.fullPath);
  metadata.contentType = "image/jpeg";
  expect(await assertSucceeds(uploadBytes(profileRef, img, metadata)));

  deleteInStorage(testEnv, profileRef.fullPath);
  metadata.contentType = "image/png";
  expect(await assertSucceeds(uploadBytes(profileRef, img, metadata)));

  deleteInStorage(testEnv, serviceRef.fullPath);
  expect(await assertSucceeds(uploadBytes(serviceRef, img, metadata)));
});

test("deny uploading with wrong image type", async () => {
  deleteInStorage(testEnv, profileRef.fullPath);
  const metadata = { contentType: "image/tiff" };
  expect(await assertFails(uploadBytes(profileRef, img, metadata)));
});

test("deny unauth image upload", async () => {
  deleteInStorage(testEnv, profileRef.fullPath);
  profileRef = ref(unauth, profileRef.fullPath);
  const metadata = { contentType: "image/webp" };
  expect(await assertFails(uploadBytes(profileRef, img, metadata)));
});

test("deny uploading to someone elses folders", async () => {
  const metadata = { contentType: "image/webp" };
  const otherAuthRef = ref(auth, "otherAuth/profile.webp");
  expect(await assertFails(uploadBytes(otherAuthRef, img, metadata)));

  deleteInStorage(testEnv, profileRef.fullPath);
  const otherAuth = testEnv.authenticatedContext("otherAuth").storage();
  profileRef = ref(otherAuth, profileRef.fullPath);
  expect(await assertFails(uploadBytes(profileRef, img, metadata)));
});

test("deny uploading images larger than 10MB", async () => {
  deleteInStorage(testEnv, profileRef.fullPath);
  const largeImage = readFileSync(path.join(__dirname, "large_image.jpg"));
  const metadata = { contentType: "image/jpeg" };
  expect(await assertFails(uploadBytes(profileRef, largeImage, metadata)));
});
