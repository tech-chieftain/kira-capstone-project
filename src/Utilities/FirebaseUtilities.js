import firebase from "../Firebase";
// Add the functions used in firebase here.

const db = firebase.firestore();

export const getFreelancers = () => {
  const citiesRef = Firebase.firestore()
    .collection("Freelancers")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });
};

export const addService = (userID, title, description, images, price, etd, revisions) => {
  db.collection("users")
    .doc(userID)
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

export const getUserServices = (userID) => {
  db.collection("users").doc(userID).collection("services").get();
};
