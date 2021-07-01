import React, { useEffect } from "react";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { i18n } from "next-i18next";
import "antd/dist/antd.css";

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return <Component {...pageProps} />;
}
export default appWithTranslation(App);
