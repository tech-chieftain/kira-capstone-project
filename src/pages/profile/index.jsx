import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProfilePage from "../../components/ProfilePage/ProfilePage";

const profile = () => (
  <div>
    <ProfilePage />
  </div>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default profile;
