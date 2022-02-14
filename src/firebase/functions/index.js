const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const services = db.collection("services");
const users = db.collection("users");
const normalizedUserDataKeys = ["photoURL", "displayName"];

exports.updateProviderStatus = functions.firestore
    .document("services/{serviceId}")
    .onCreate((snap, context) => {
      const providerUID = snap.data().provider.uid;
      console.log(context.params.serviceId);
      const userRef = db.doc(`users/${providerUID}`);
      return userRef.update({isServiceProvider: true});
    });

async function updateQueryBatch(query, payload, resolve) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // update documents in a batch
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.update(doc.ref, payload);
  });
  await batch.commit();

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  process.nextTick(() => {
    updateQueryBatch(query, payload, resolve);
  });
}

exports.updateNormalizedData = functions.firestore
    .document("users/{userId}")
    .onUpdate((change, context) => {
      const oldData = change.before.data();
      const newData = change.after.data();
      const changedNormalizedFieldKeys = normalizedUserDataKeys.filter(
          (key) => oldData[key] !== newData[key],
      );
      if (!changedNormalizedFieldKeys.length) return;

      const newNormalizedData = {};
      changedNormalizedFieldKeys.forEach(
          (key) => (newNormalizedData["provider." + key] = newData[key]),
      );

      let query = services.where("provider.uid", "==", change.before.id);
      changedNormalizedFieldKeys.forEach(
          (key) => (query = query.where("provider." + key, "==", oldData[key])),
      );
      query = query.limit(500);

      users
          .doc(change.before.id)
          .set({changedAt: admin.firestore.FieldValue.serverTimestamp()}, {merge: true});

      return new Promise((resolve, reject) => {
        updateQueryBatch(query, newNormalizedData, resolve).catch(reject);
      });
    });

exports.createUserRecord = functions.auth.user().onCreate((user, context) => {
  return users.doc(user.uid).set({
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
    isServiceProvider: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    changedAt: new admin.firestore.Timestamp(0, 0),
    title: "",
    location: "",
    about: "",
    phone: "",
    qualifications: [],
    skills: [],
  });
});
