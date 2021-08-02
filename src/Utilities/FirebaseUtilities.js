import firebase from "../Firebase";
// Add the functions used in firebase here.

const db = firebase.firestore();

export const addService = (user, title, description, images, price, etd, revisions) => {
  db.collection("users")
    .doc(user.uid)
    .collection("services")
    .add({
      title,
      description,
      images,
      price,
      etd,
      revisions,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
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
};

export const getUserServices = (user) => {
  db.collection("users").doc(user.uid).collection("services").get();
};

export const getUserInfo = (user) =>
  db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => console.log(doc.data()));

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

const uploadImage = async (file) => {
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
