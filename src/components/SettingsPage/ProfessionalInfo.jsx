/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import { Form } from "react-bootstrap";

const ProfessionalInfo = ({ showProfessional }) => {
  return (
    <>
      {showProfessional && (
        <Form>
          <Form.Control placeholder="Job" className="mb-4" />
          <Form.Control placeholder="education" className="my-4" />
          <Form.Control as="textarea" placeholder="Skills" className="mb-3" />
          <Form.Control as="textarea" placeholder="Languages" className="mb-3" />
        </Form>
      )}
    </>
  );
};

export default ProfessionalInfo;
