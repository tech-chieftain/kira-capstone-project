/* eslint-disable arrow-body-style */
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import Container from "./InformationSidebar.styled";

const InformationSidebar = ({ skills, languages, educations }) => {
  const { t } = useTranslation("profile");

  return (
    <Container className="shadow">
      <div className="w-75 mx-auto my-xl-5 my-md-0">
        <h5 className="px-3 py-2 border-bottom border-light">{t("profile.skills")}</h5>
        <div>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-75 mx-auto my-xl-5 my-md-0">
        <h5 className="px-3 py-2 border-bottom border-light">{t("profile.language")}</h5>
        <div>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-75 mx-auto my-xl-5 my-md-0">
        <h5 className="px-3 py-2 border-bottom border-light">{t("profile.education")}</h5>
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
};

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
