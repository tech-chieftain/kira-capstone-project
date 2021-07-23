import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const profile = () => <div />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default profile;
