import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SettingsPage from "../../components/SettingsPage/SettingsPage";

const settings = () => (
  <div>
    <SettingsPage />
  </div>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default settings;
