import { Background } from "./ProfileHeader.styled";
import PropTypes from "prop-types";

const ProfileHeader = ({
  profilePicture,
  name,
  profession,
  address,
  description,
  rating,
}) => {
  return <Background></Background>;
};

ProfileHeader.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
};

ProfileHeader.defaultProps = {
  profilePicture: "",
  name: "",
  profession: "",
  address: "",
  description: "",
  rating: ,
};

export default ProfileHeader;