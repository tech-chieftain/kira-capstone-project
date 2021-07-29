import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, ProgressBar } from "./InfromationSidebar.styled";

// eslint-disable-next-line arrow-body-style
const InformationSidebar = ({ progresses, skills, details, languages, educations }) => (
  <Container className="shadow">
    <Card border="0" style={{ width: "18rem" }}>
      <Card.Header className="bg-white mx-3 h5">Work History</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            {progresses.map((progress, index) => (
              <li key={index}>
                <div>{progress.work}</div>
                <small>{progress.level}%</small>
                <ProgressBar id="file" value={progress.level} max="100" />
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    <br />

    <Card border="0" style={{ width: "18rem" }}>
      <Card.Header className="bg-white mx-3 h5">Details</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    <br />

    <Card border="0" style={{ width: "18rem" }}>
      <Card.Header className="bg-white mx-3 h5">Skills</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    <br />

    <Card border="0" style={{ width: "18rem" }}>
      <Card.Header className="bg-white mx-3 h5">Language</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>
                {lang.language} - {lang.level}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    <br />

    <Card border="0" style={{ width: "18rem" }}>
      <Card.Header className="bg-white mx-3 h5">Education</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            {educations.map((education, index) => (
              <li key={index}>
                {education.college} - {education.department}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

InformationSidebar.propTypes = {
  skills: PropTypes.array,
  details: PropTypes.array,
  languages: PropTypes.array,
  educations: PropTypes.array,
  progresses: PropTypes.array,
};

InformationSidebar.defaultProps = {
  skills: [
    "Html",
    "Javascript",
    "Css",
    "Web Developer",
    "Responsive Website",
    "Web Desesigner",
    "Boot Strap",
    "Jquery",
  ],
  details: ["Works 45hrs per week", "$35.00/hr"],
  languages: [
    { language: "Kurdish", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Arabic", level: "Good" },
    { language: "French", level: "begginer" },
  ],
  educations: [{ college: "Salahaddin University", department: "College of Engineering" }],
  progresses: [
    { work: "Success Rate", level: "80" },
    { work: "Hours Worked", level: "80" },
    { work: "Jobs", level: "50" },
  ],
};
export default InformationSidebar;
