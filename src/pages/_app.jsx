import React, { useEffect } from "react";
import Head from "next/head";

import { appWithTranslation, i18n } from "next-i18next";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/scss/global.scss";
import Footer from "../components/Footer/Footer";


// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default appWithTranslation(App);
