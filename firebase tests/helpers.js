const {
  doc,
  setDoc,
  writeBatch,
  serverTimestamp,
} = require("firebase/firestore");
const { object } = require("prop-types");

module.exports.addUserAdmin = async (testEnv, userData, uid) => {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {
      ...userData,
      isServiceProvider: false,
      createdAt: serverTimestamp(),
    });

    return true;
  });
};

module.exports.addServiceAdmin = async (testEnv, serviceData, serviceId) => {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    const batch = writeBatch(db);

    const serviceRef = doc(db, "services", serviceId);
    batch.set(serviceRef, serviceData);

    const userRef = doc(db, "users", serviceData.provider.uid);
    batch.update(userRef, { isServiceProvider: true });

    await batch.commit();
    return serviceRef.id;
  });
};

module.exports.getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
};
