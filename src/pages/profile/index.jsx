import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import InformationSidebar from "../../components/InformationSidebar/InformationSidbar";
import ServieceCardData from "../../components/ServiecCardData/ServieceCardData";
import { ProfileData } from "../../components/MockData";

const profile = () => (
  <div>
    <ProfileHeader
      name={ProfileData[0].name}
      rating={ProfileData[0].rating}
      description={ProfileData[0].description}
      profilePic={ProfileData[0].profilePic}
      location={ProfileData[0].location}
      profession={ProfileData[0].profession}
    />
    <Container>
      <div>
        <Row md={3}>
          <Col>
            <InformationSidebar />
          </Col>
          <Col>
            <ServieceCardData />
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
`;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default profile;
