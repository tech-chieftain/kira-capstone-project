import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ProfileHeader from "../../../components/ProfileHeader/ProfileHeader";
import InformationSidebar from "../../../components/InformationSidebar/InformationSidbar";
import ServieceCardData from "../../../components/ServiecCardData/ServieceCardData";
import { ProfileData } from "../../../components/MockData";

import { getUserProfile, getAllFreelancers } from "../../../Utilities/FirebaseUtilities";

const profile = ({ user, services }) => (
  <div>
    <ProfileHeader
      name={user.displayName}
      rating={ProfileData[0].rating}
      description={user.about}
      profilePicture={user.photoURL}
      location={user.location}
      profession={user.job}
    />
    <Container>
      <div>
        <Row xl={3} md>
          <Col>
            <InformationSidebar
              skills={user.skills}
              languages={user.languages}
              educations={user.education}
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
  const userData = await getUserProfile(context.params.uid);

  console.log("userData", userData);

  return {
    props: {
      user: userData[0],
      services: userData[1],
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
  const freelancers = await getAllFreelancers();
  const paths = freelancers.map((freelancer) => ({
    params: { uid: freelancer.uid },
  }));

  return { paths, fallback: false };
}
export default profile;
