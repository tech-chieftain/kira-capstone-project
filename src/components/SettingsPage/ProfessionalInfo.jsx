/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

const ProfessionalInfo = ({ showProfessional }) => {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);

  const handleChange = (set) => (e) => {
    set(e.target.value.split(", "));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const arrayToString = (arr) => arr.join(", ");

  return (
    <>
      {showProfessional && (
        <Form onSubmit={handleSubmit}>
          <Form.Control placeholder="Job" className="mb-4" />
          <Form.Control
            as="textarea"
            placeholder="Education"
            className="my-4"
            name="education"
            value={arrayToString(education)}
            onChange={handleChange(setEducation)}
          />
          <Form.Control
            as="textarea"
            placeholder="Skills"
            className="mb-3"
            name="skills"
            value={arrayToString(skills)}
            onChange={handleChange(setSkills)}
            style={{ height: "100px" }}
          />
          <Form.Control
            as="textarea"
            placeholder="Languages"
            className="mb-3"
            name="languages"
            value={arrayToString(languages)}
            onChange={handleChange(setLanguages)}
            style={{ height: "100px" }}
          />
          <div className="d-flex justify-content-end mt-4">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      )}
    </>
  );
};

export default ProfessionalInfo;
