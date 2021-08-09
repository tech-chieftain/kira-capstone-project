import firebase from "../Firebase";
// Add the functions used in firebase here.

const db = firebase.firestore();

export const addService = async (user, payload) => {
  const docRef = await db.collection("users").doc(user.uid).collection("services").doc();
  return docRef.set({ uid: docRef.id, ...payload });
};

export const updateUserInDB = (user, payload = {}) => {
  const { uid, email, displayName, photoURL } = user;
  const newPayload = {
    email,
    displayName,
    photoURL,
    ...payload,
  };
  const docRef = db.collection("users").doc(uid);

  docRef.get().then((doc) => {
    if (doc.exists) return docRef.update(newPayload);
    return docRef.set(newPayload);
  });
};

export const getUserServices = async (user) => {
  const services = [];
  await db
    .collection("users")
    .doc(user.uid)
    .collection("services")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        services.push({ id: doc.id, ...doc.data() });
      });
    });

  return services;
};

export const getService = async (uid) => {
  const querySnapshot = await db.collectionGroup("services").where("uid", "==", uid).get();

  const matches = [];
  await querySnapshot.forEach((doc) =>
    matches.push({
      freelancerUID: doc.ref.parent.parent.id,
      ...doc.data(),
    }),
  );

  return matches && matches[0];
};

export const getUserInfo = (user) =>
  db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => doc.data());

export const getUserProfile = async (uid) => {
  const personal = getUserInfo({ uid });
  const services = getUserServices({ uid });
  return Promise.all([personal, services]);
};

export const getAllFreelancers = async () => {
  const freelancers = [];
  const querySnapshot = await db.collection("users").where("freelancer", "==", true).get();
  await querySnapshot.forEach((doc) => freelancers.push({ uid: doc.id, ...doc.data() }));

  return freelancers;
};

export const getAllServices = async () => {
  const services = [];
  const querySnapshot = await db.collectionGroup("services").get();
  await querySnapshot.forEach((doc) => services.push(doc.data()));
  return services;
};

export const getAllServicesUID = async () => {
  const uids = [];
  const querySnapshot = await db.collectionGroup("services").get();
  await querySnapshot.forEach((doc) => uids.push(doc.id));
  return uids;
};

export const uploadImage = async (file) => {
  const fileRef = firebase.storage().ref().child(file.name);
  await fileRef.put(file);
  return fileRef.getDownloadURL();
};

export const updateProfilePicture = async (file, user) => {
  const photoURL = await uploadImage(file);
  await user.updateProfile({
    photoURL,
  });
  return updateUserInDB(user);
};
