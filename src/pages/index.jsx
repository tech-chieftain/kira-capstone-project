import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import FPCard from "../components/FPCard/FPCard";
// import { CustomCarousel } from "@components/CustomCarousel/CustomCarousel";

function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  const arrayOfNodes = [<FPCard />, <FPCard />, <FPCard />, <FPCard />];

  return (
    <div className="container" style={{ height: "400px", width: "100%" }}>
      <CustomCarousel items={arrayOfNodes} />
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
