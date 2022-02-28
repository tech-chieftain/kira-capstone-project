import { db, storage } from "./firebase";

const services = db.collection("services");
const users = db.collection("users");

export const uploadImage = async (path, file) => {
  const fileRef = storage.ref().child(`${path}/${file.name}`);
  await fileRef.put(file);
  return fileRef.getDownloadURL();
};

export const addService = async (user, images, serviceData) => {
  const newServiceRef = services.doc();
  const { uid, displayName, photoURL } = user;
  const uploadImages = (images) => {
    if (!images.length) return [];
    return Promise.all(images.map((img) => uploadImage(`${user.uid}/${newServiceRef.id}`, img)));
  };

  serviceData.images = await uploadImages(images);
  serviceData.revisions = Number(serviceData.revisions);
  serviceData.price = Number(serviceData.price);

  return newServiceRef.set({
    provider: {
      displayName,
      photoURL,
      uid,
    },
    ...serviceData,
  });
};

export const updateUserInDB = (user, payload = {}) => {
  const { uid, email, displayName, photoURL } = user;
  const newPayload = {
    email,
    displayName,
    photoURL,
    ...payload,
  };
  const docRef = users.doc(uid);

  docRef.get().then((doc) => {
    if (doc.exists) return docRef.update(newPayload);
    return docRef.set(newPayload);
  });
};

export const getUserServices = async (user, quantity = 5) => {
  const servicesData = [];
  await services
    .where("provider.uid", "==", user.uid)
    .limit(quantity)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        servicesData.push({ uid: doc.id, ...doc.data() });
      });
    });

  return servicesData;
};

export const getService = async (uid) => {
  const doc = await db.collection("services").doc(uid).get();

  if (doc.exists) return doc.data();
  return {};
};

export const getUserInfo = async (user) =>
  users
    .doc(user.uid)
    .get()
    .then((doc) => doc.data());

export const getUserProfile = async (uid) => {
  const personal = getUserInfo({ uid });
  const services = getUserServices({ uid });
  return Promise.all([personal, services]);
};

export const getAllProviders = async () => {
  const providers = [];
  const querySnapshot = await users.where("isServiceProvider", "==", true).get();
  await querySnapshot.forEach((doc) => providers.push({ uid: doc.id, ...doc.data() }));

  return providers;
};

export const getAllServices = async () => {
  const services = [];
  const querySnapshot = await db.collection("services").get();
  await querySnapshot.forEach((doc) => services.push({ uid: doc.id, ...doc.data() }));
  return services;
};

export const getAllServicesUID = async () => {
  const uids = [];
  const querySnapshot = await db.collection("services").get();
  await querySnapshot.forEach((doc) => uids.push(doc.id));
  return uids;
};

export const updateProfilePicture = async (user, file) => {
  file.name = "profilePicture";
  const photoURL = await uploadImage(user.uid, file);
  await user.updateProfile({
    photoURL,
  });
  return updateUserInDB(user);
};
