import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar"

const freelancers = () => (
  <>
    <Head>
      <title>Freelancer Search</title>
    </Head>
    <Navbar />
  </>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default freelancers;
