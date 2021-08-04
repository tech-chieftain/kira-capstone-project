import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import LandingComponent from "../../components/HeroComponents/LandingComponent";
import HomeComponent from "../../components/HeroComponents/HomeComponent";
import LogoSection from "../../components/HeroComponents/LogoSection";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import { FPFreelancers, FPbusinesses } from "../../components/MockData";
import FPCard from "../../components/FPCard/FPCard";
import TestimonyCard from "../../components/TestimonyCard/TestimonyCard";

const index = () => (
  <div>
    <LandingComponent />
    <Container className="my-4">
      <CustomCarousel
        items={FPFreelancers.map((freelancer) => (
          <FPCard {...freelancer} overlay />
        ))}
        slides={4}
      />
    </Container>
    <HomeComponent />
    {/* <Container>
      <CustomCarousel
        items={FPbusinesses.map((businesses) => (
          <FPCard {...businesses} />
        ))}
        slides={4}
      />
    </Container> */}
    <Container>
      <CustomCarousel
        items={[
          {
            name: "Annie",
            job: "Web Developer",
            quote:
              "When you want to create a business bigger than yourself, you need a lot of help. That’s what Kira provides.",
          },
          {
            name: "Pushi",
            job: "Web Developer/ full time cat",
            quote: "Working with Kira is like belly rubs i never get tired of it.",
          },
        ].map((review) => (
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
