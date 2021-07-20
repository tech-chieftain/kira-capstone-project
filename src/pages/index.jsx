import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
// import { CustomCarousel } from "@components/CustomCarousel/CustomCarousel";

function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <CustomCarousel
        thumbnail
        items={[
          "https://picsum.photos/300/200?random=1",
          "https://picsum.photos/300/200?random=2",
          "https://picsum.photos/300/200?random=3",
        ].map((image) => (
          <img
            className="m-auto"
            src={image}
            alt=""
            style={{ height: "100%", objectFit: "100%" }}
          />
        ))}
      />
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
