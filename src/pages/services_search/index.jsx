import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const services = () => <div />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default services;
