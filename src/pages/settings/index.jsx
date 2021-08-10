import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SettingsPage from "../../components/SettingsPage/SettingsPage";

const settings = () => <SettingsPage />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "settings", "navbar", "footer"])),
  },
});

export default settings;
