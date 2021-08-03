import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAllFreelancers,
  getAllServices,
  updateProfilePicture,
} from "../Utilities/FirebaseUtilities";
import firebase from "../Firebase";

function Homepage() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    updateProfilePicture(data.get("file"), user);
  };
  return (
    <>
      {user && `Hello ${user.displayName}! email: ${user.email}`}{" "}
      <button type="button" onClick={getAllFreelancers}>
        get users
      </button>
      <button type="button" onClick={getAllServices}>
        get services
      </button>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <input type="submit" />
      </form>
    </>
  );
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
    
    
  },
  
});
  

export default Homepage;
