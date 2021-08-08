import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "react-bootstrap/Container";
import ServiceDescription from "../../../components/ServiceDescription/ServiceDescription";
import ServiceHeader from "../../../components/ServiceHeader/ServiceHeader";
import ServiceSeller from "../../../components/ServiceSeller/ServiceSeller";

const Service = () => (
  <>
    <Container>
      <ServiceHeader />
    </Container>
    <Container id="overview">
      <h5>Overview component will go here</h5>
    </Container>
    <Container id="description">
      <ServiceDescription description="about this service" />
    </Container>
    <Container id="seller">
      <ServiceSeller
        Name="John Doe"
        Location="Tampa"
        Description="About this man"
        ProfilePic="https://picsum.photos/250"
      />
    </Container>
  </>
);
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default Service;
