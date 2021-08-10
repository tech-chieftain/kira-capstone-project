import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const catagories = () => <div />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default catagories;
