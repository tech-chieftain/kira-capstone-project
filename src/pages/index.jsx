import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
// import { CustomCarousel } from "@components/CustomCarousel/CustomCarousel";

function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  const arrayOfNodes = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ].map((image) => (
    <img className="nodes" src={image} alt="" style={{ height: "100%", objectFit: "contain" }} />
  ));

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <CustomCarousel thumbnail items={arrayOfNodes} />
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
