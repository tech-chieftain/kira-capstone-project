import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<<<<<<< HEAD
import LargeProfileCard from "../components/LargeProfileCard/LargeProfileCard";
// import { Navbar } from "@components/Navbar/Navbar";
=======
>>>>>>> 6f07216eb0524b71d7ba1e0b40526c9c0c470c0b

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
    <div>
      <LargeProfileCard />
    </div>
  );
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
