import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import ServiceDescription from "../../../components/ServiceDescription/ServiceDescription";
import ServiceHeader from "../../../components/ServiceHeader/ServiceHeader";
import ServiceSeller from "../../../components/ServiceSeller/ServiceSeller";
import { getService, getAllServicesUID, getUserInfo } from "../../../Utilities/FirebaseUtilities";

const Service = ({ service, user }) => (
  <>
    <Container>
      <ServiceHeader />
    </Container>
    <Container id="overview">
      <h5>Overview component will go here</h5>
    </Container>
    <Container id="description">
      <ServiceDescription description={service.description} />
    </Container>
    <Container id="seller">
      <ServiceSeller
        Name={user.displayName}
        Location={user.location}
        Description={user.about}
        ProfilePic={user.photoURL}
      />
    </Container>
  </>
);

Service.propTypes = {
  service: PropTypes.object,
  user: PropTypes.object,
};
export const getStaticProps = async (context) => {
  const service = await getService(context.params.uid);
  const user = await getUserInfo({ uid: service.freelancerUID });

  console.log("service:", service);
  console.log("user:", user);

  return {
    props: {
      service,
      user,
      ...(await serverSideTranslations(context.locale, ["common"])),
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
