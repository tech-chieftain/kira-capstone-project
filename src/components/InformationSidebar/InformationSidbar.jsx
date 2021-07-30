import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "./InformationSidebar.styled";

const InformationSidebar = ({ progresses, skills, details, languages, educations }) => (
  <Container className="shadow">
    <div className="w-75 mx-auto my-5">
      <h5 className="px-3 py-2 border-bottom border-light">Work History</h5>
      <div>
        <ul>
          {progresses.map((progress, index) => (
            <li key={index}>
              <span>{progress.work} /month</span>
              <ProgressBar
                now={progress.level}
                label={`${progress.level}%`}
                variant="primary"
                id="progress"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="w-75 mx-auto my-5">
      <h5 className="px-3 py-2 border-bottom border-light">Details</h5>
      <div>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="w-75 mx-auto my-5 ">
      <h5 className="px-3 py-2 border-bottom border-light">Skills</h5>
      <div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="w-75 mx-auto my-5">
      <h5 className="px-3 py-2 border-bottom border-light">Language</h5>
      <div>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>
              {lang.language} - {lang.level}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="w-75 mx-auto my-5">
      <h5 className="px-3 py-2 border-bottom border-light">Education</h5>
      <div>
        <ul>
          {educations.map((education, index) => (
            <li key={index}>
              {education.college} - {education.department}
            </li>
          ))}
        </ul>
      </div>
    </div>
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
    { work: "Success Rate", level: "70" },
    { work: "Hours Worked", level: "80" },
    { work: "Jobs", level: "50" },
  ],
};
export default InformationSidebar;
