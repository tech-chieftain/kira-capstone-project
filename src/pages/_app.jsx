import React, { useEffect } from "react";
import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";
import { appWithTranslation, i18n } from "next-i18next";
import { auth } from "../firebase/firebase";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/scss/global.scss";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import UserContext from "../context/context";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  return (
    <UserContext.Provider value={user}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </UserContext.Provider>
  );
}
export default appWithTranslation(App);
