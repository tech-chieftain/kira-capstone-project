import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const settings = () => <div />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default settings;
