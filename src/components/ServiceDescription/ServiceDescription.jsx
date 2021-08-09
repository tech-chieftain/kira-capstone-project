import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";

const ServiceDescription = ({ description }) => (
  <Card className="p-4 my-5">
    <Card.Title as="h2">About Service</Card.Title>
    <ReactMarkdown>{description}</ReactMarkdown>
  </Card>
);

export default ServiceDescription;
