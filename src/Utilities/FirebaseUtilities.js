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
    ...payload,
    email,
    displayName,
    photoURL,
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
// db
//   .collection("users")
//   .doc(uid)
//   .get()
//   .then((doc) => doc.data());

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
