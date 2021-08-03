import React, { useEffect } from "react";


import { useAuthState } from "react-firebase-hooks/auth";
import { appWithTranslation, i18n } from "next-i18next";
import firebase from "../Firebase";
import { updateUserInDB } from "../Utilities/FirebaseUtilities";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/scss/global.scss";
import Pricepage from "../components/Service_Pricing_information/Pricepage"

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const [user, loading] = useAuthState(firebase.auth());

  firebase.auth().onAuthStateChanged((user) => {
    if (user) updateUserInDB(user);
  });
 
  return (
    <>
      <Pricepage  price={" "} description={" "} duration={" "} revisions ={" "}  data={[" "," "," "]}  /> 
      

    </>
  );
}
export default appWithTranslation(App);
