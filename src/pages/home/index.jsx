import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LandingComponent from "../../components/HeroComponents/LandingComponent";
import HomeComponent from "../../components/HeroComponents/HomeComponent";
import LogoSection from "../../components/HeroComponents/LogoSection";

const index = () => (
  <div>
    <LandingComponent />
    <HomeComponent />
    <LogoSection />
  </div>
);
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default index;
