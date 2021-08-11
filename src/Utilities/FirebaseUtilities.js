import firebase from "../Firebase";
// Add the functions used in firebase here.

const db = firebase.firestore();

export const addService = (user, serviceData) => {
  const { uid, displayName, photoURL } = user;
  db.collection("services").add({
    freelancerUID: uid,
    displayName,
    photoURL,
    ...serviceData,
  });
  db.collection("users").doc(uid).update({
    freelancer: true,
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
  const docRef = db.collection("users").doc(uid);

  docRef.get().then((doc) => {
    if (doc.exists) return docRef.update(newPayload);
    return docRef.set(newPayload);
  });

  db.collection("services")
    .where("freelancerUID", "==", uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          displayName,
          photoURL,
        });
      });
    });
};

export const getUserServices = async (user) => {
  const services = [];
  await db
    .collection("services")
    .where("freelancerUID", "==", user.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        services.push({ uid: doc.id, ...doc.data() });
      });
    });

  return services;
};

export const getService = async (uid) => {
  const doc = await db.collection("services").doc(uid).get();

  if (doc.exists) return doc.data();
  return {};
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
