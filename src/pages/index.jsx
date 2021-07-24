import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/Service_Header_Component/ServiceHeader";
// import { Navbar } from "@components/Navbar/Navbar";

function Homepage() {
  // This controls the direction of the page for RTL languages

  return (
    <div>
      <Header />
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
