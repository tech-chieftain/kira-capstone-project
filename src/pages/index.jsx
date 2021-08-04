import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container } from "react-bootstrap";
import LargeProfileCard from "../components/LargeProfileCard/LargeProfileCard";
// import { Navbar } from "@components/Navbar/Navbar";
import LandingComponent from "../components/HeroComponents/LandingComponent";
import HomeComponent from "../components/HeroComponents/HomeComponent";
import LogoSection from "../components/HeroComponents/LogoSection";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import { FPFreelancers, FPbusinesses } from "../components/MockData";
import FPCard from "../components/FPCard/FPCard";
import TestimonyCard from "../components/TestimonyCard/TestimonyCard";

import {
  getAllFreelancers,
  getAllServices,
  updateProfilePicture,
} from "../Utilities/FirebaseUtilities";
import firebase from "../Firebase";

function Homepage() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    updateProfilePicture(data.get("file"), user);
  };
  return (
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
              quote:
                "Working with Kira is like belly rubs i never get tired of it.",
            },
          ].map((review) => (
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
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
