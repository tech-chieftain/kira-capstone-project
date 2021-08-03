import firebase from "../Firebase";
// Add the functions used in firebase here.

const db = firebase.firestore();

export const addService = (user, payload) => {
  db.collection("users").doc(user.uid).collection("services").add(payload);
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

export const getUserServices = (user) => {
  db.collection("users").doc(user.uid).collection("services").get();
};

export const getUserInfo = (user) =>
  db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => doc.data());

export const getAllFreelancers = async () => {
  const freelancers = [];
  const querySnapshot = await db.collection("users").where("freelancer", "==", true).get();
  await querySnapshot.forEach((doc) => freelancers.push(doc.data()));

  return freelancers;
};

export const getAllServices = async () => {
  const services = [];
  const querySnapshot = await db.collectionGroup("services").get();
  await querySnapshot.forEach((doc) => services.push(doc.data()));
  return services;
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
