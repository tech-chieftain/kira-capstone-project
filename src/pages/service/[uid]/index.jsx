import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import ServiceDescription from "../../../components/ServiceDescription/ServiceDescription";
import ServiceHeader from "../../../components/ServiceHeader/ServiceHeader";
import ServiceSeller from "../../../components/ServiceSeller/ServiceSeller";
import ServicePricingInformation from "../../../components/ServicePricingInformation/ServicePricingInformation";
import { getService, getAllServicesUID, getUserInfo } from "../../../Utilities/FirebaseUtilities";
import CustomCarousel from "../../../components/CustomCarousel/CustomCarousel";
import ServiceHeaderProfile from "../../../components/ServiceHeaderProfile/ServiceHeaderProfile";

const Service = ({ service, user }) => (
  <Container>
    <Row xs={1} xl={2}>
      <Col>
        <Container>
          <ServiceHeader />
        </Container>
        <Container id="overview" className="mb-5">
          <ServiceHeaderProfile
            uid={service.freelancerUID}
            serviceName={service.title}
            profilePic={user.photoURL}
            nameOfPerson={user.displayName}
          />
          <Container style={{ height: "500px", marginBottom: "8rem" }}>
            <CustomCarousel
              thumbnail
              items={service.images && service.images.map((image) => <img src={image} alt="" />)}
            />
          </Container>
        </Container>
        <Container id="description" className="mt-5">
          <ServiceDescription description={service.details} />
        </Container>
        <Container id="seller">
          <ServiceSeller
            email={user.email}
            phone={user.phone}
            uid={service.freelancerUID}
            Name={user.displayName}
            Location={user.location}
            Description={user.about}
            ProfilePic={user.photoURL}
          />
        </Container>
      </Col>
      <Col>
        <ServicePricingInformation
          email={user.email}
          phone={user.phone}
          price={service.price}
          perks={service.perks}
          duration={service.etd}
          revisions={service.revisions}
          description={service.description}
          name={user.displayName}
        />
      </Col>
    </Row>
  </Container>
);

Service.propTypes = {
  service: PropTypes.object,
  user: PropTypes.object,
};
export const getStaticProps = async (context) => {
  const service = await getService(context.params.uid);
  const user = await getUserInfo({ uid: service.freelancerUID });

  return {
    props: {
      service,
      user,
      ...(await serverSideTranslations(context.locale, ["common", "footer", "navbar", "service"])),
    },
  };
};

export async function getStaticPaths() {
  const services = await getAllServicesUID();
  const paths = services.map((service) => ({
    params: { uid: service },
  }));

  return { paths, fallback: false };
}

export default Service;
