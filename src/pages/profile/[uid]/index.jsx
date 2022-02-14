import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import InformationSidebar from "../../../components/InformationSidebar/InformationSidbar";
import ServieceCardData from "../../../components/ServiecCardData/ServieceCardData";
import { ProfileData } from "../../../components/MockData";

import { getUserProfile, getAllProviders } from "../../../firebase/utilities";

const profile = ({ user, services }) => (
  <div>
    <ProfileHeader
      email={user.email}
      phone={user.phone}
      name={user.displayName}
      rating={ProfileData[0].rating}
      description={user.about}
      profilePicture={user.photoURL}
      location={user.location}
      profession={user.title}
    />
    <Container>
      <div>
        <Row xl={3} md>
          <Col>
            <InformationSidebar
              skills={user.skills}
              languages={[]}
              educations={user.qualifications}
            />
          </Col>
          <Col>
            <ServieceCardData services={services} />
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(193, 193, 174, 0.09);
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const getStaticProps = async (context) => {
  const [user, services] = await getUserProfile(context.params.uid);

  user.changedAt = user.changedAt.toDate().toJSON();
  user.createdAt = user.createdAt.toDate().toJSON();

  return {
    props: {
      user,
      services,
      ...(await serverSideTranslations(context.locale, [
        "common",
        "profile",
        "card",
        "navbar",
        "footer",
      ])),
    },
  };
};

export async function getStaticPaths() {
  const providers = await getAllProviders();
  const paths = providers.map((provider) => ({
    params: { uid: provider.uid },
  }));

  return { paths, fallback: false };
}
export default profile;
