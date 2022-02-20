import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "react-bootstrap";
import LandingComponent from "../components/HeroComponents/LandingComponent";
import HomeComponent from "../components/HeroComponents/HomeComponent";
import LogoSection from "../components/HeroComponents/LogoSection";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import { FPFreelancers, FPbusinesses, TestimonyData } from "../components/MockData";
import FPCard from "../components/FPCard/FPCard";
import TestimonyCard from "../components/TestimonyCard/TestimonyCard";

function Homepage() {
  const { t } = useTranslation("home");

  return (
    <div>
      <LandingComponent />
      <Container className="my-5">
        <h1 className="muted m-3">{t("home.popularServices")}</h1>
        <CustomCarousel
          items={FPFreelancers.map((freelancer) => (
            <FPCard {...freelancer} overlay />
          ))}
          slides={4}
          smSlides={2}
        />
      </Container>
      <HomeComponent />
      <Container>
        <h1 className="muted m-3">{t("home.otherBusinessesUsing")}</h1>
        <CustomCarousel
          items={FPbusinesses.map((business) => (
            <FPCard {...business} />
          ))}
          slides={4}
          smSlides={2}
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
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home", "navbar", "footer"])),
  },
});

export default Homepage;
