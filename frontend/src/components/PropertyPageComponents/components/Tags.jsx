import PropTypes from "prop-types";

import './tags.css';

const Tags = ({ tags }) => {
  return (
    <div>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li className="tags-item" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
