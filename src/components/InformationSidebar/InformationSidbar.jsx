import PropTypes from "prop-types";
import Container from "./InformationSidebar.styled";

const InformationSidebar = ({ skills, languages, educations }) => (
  <Container className="shadow">
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
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="w-75 mx-auto my-5">
      <h5 className="px-3 py-2 border-bottom border-light">Education</h5>
      <div>
        <ul>
          {educations.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
      </div>
    </div>
  </Container>
);

InformationSidebar.propTypes = {
  skills: PropTypes.array,
  languages: PropTypes.array,
  educations: PropTypes.array,
};

InformationSidebar.defaultProps = {
  skills: ["Html", "Javascript", "Css"],
  languages: ["Kurdish", "Arabic", "English"],
  educations: ["Salahaddin University", "College of Engineering"],
};
export default InformationSidebar;
