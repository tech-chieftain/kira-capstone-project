import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LandingComponent from "../../components/HeroComponents/LandingComponent";
import HomeComponent from "../../components/HeroComponents/HomeComponent";

const index = () => (
  <div>
    <LandingComponent />
    <HomeComponent />
  </div>
);
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default index;
