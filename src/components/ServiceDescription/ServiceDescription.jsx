import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";

const ServiceDescription = ({ description }) => (
  <Card className="p-4 my-5">
    <Card.Title as="h2">About services</Card.Title>
    <ReactMarkdown>{description}</ReactMarkdown>
  </Card>
);

export default ServiceDescription;
