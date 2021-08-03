import React, { useEffect } from "react";
import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";
import { appWithTranslation, i18n } from "next-i18next";
import firebase from "../Firebase";
import { updateUserInDB } from "../Utilities/FirebaseUtilities";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/scss/global.scss";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const [user, loading, error] = useAuthState(firebase.auth());

  firebase.auth().onAuthStateChanged((user) => {
    if (user) updateUserInDB(user);
  });

  console.log("user", user, loading, error);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavBar
        overview={!user || loading}
        name={user && user.displayName}
        profilePicture={user && user.photoURL}
        handleLogOut={() => user && firebase.auth().signOut()}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default appWithTranslation(App);
