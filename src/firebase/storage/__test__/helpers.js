import { ref, deleteObject } from "firebase/storage";

export const deleteInStorage = async (testEnv, path) => {
  testEnv.withSecurityRulesDisabled(async (context) => {
    const storage = context.storage();
    const profileRef = ref(storage, path);
    await deleteObject(profileRef);
  });
};
