import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "react-bootstrap";
import LandingComponent from "../../components/HeroComponents/LandingComponent";
import HomeComponent from "../../components/HeroComponents/HomeComponent";
import LogoSection from "../../components/HeroComponents/LogoSection";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import { FPFreelancers, FPbusinesses, TestimonyData } from "../../components/MockData";
import FPCard from "../../components/FPCard/FPCard";
import TestimonyCard from "../../components/TestimonyCard/TestimonyCard";

const index = () => (
  <div>
    <LandingComponent />
    <Container className="my-5">
      <h1 className="muted mx-3">Popular professional services</h1>
      <CustomCarousel
        items={FPFreelancers.map((freelancer) => (
          <FPCard {...freelancer} overlay />
        ))}
        slides={4}
      />
    </Container>
    <HomeComponent />
    <Container>
      <h1 className="muted m-3">What other businesses are using</h1>
      <CustomCarousel
        items={FPbusinesses.map((business) => (
          <FPCard {...business} />
        ))}
        slides={4}
      />
    </Container>
    <Container className="my-5">
      <CustomCarousel
        items={TestimonyData.map((review) => (
          <TestimonyCard {...review} />
        ))}
      />
    </Container>
    <LogoSection />
  </div>
);
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default index;
