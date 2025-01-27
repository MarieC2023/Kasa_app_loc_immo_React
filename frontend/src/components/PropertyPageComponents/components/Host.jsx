import PropTypes from "prop-types";

import './host.css';

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <h2 className="host-name">{name}</h2>
      <img className="host-img" src={picture} alt={`${name}'s picture`} />
    </div>
  );
};

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
