import Container from "react-bootstrap/Container";
import ReactMarkdown from "react-markdown";

const ServiceDescription = ({ description }) => (
  <Container>
    <h2>About services</h2>
    <ReactMarkdown>{description}</ReactMarkdown>
  </Container>
);

export default ServiceDescription;
