import PropTypes from "prop-types";

import './title.css';

const Title = ({ title, location }) => {
  return (
    <div className="title">
      <h1 className="title-main">{title}</h1>
      <p className="title-subtitle">{location}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Title;
