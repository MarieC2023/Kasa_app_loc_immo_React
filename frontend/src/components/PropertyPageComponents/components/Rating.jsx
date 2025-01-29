import PropTypes from "prop-types";
import { useMemo } from "react";

import './rating.css';

const Rating = ({ stars }) => {
  const starRating = useMemo(() => Math.min(Math.max(stars, 1), 5), [stars]);

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`star ${i < starRating ? 'active' : ''}`}
        >
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  stars: PropTypes.string.isRequired,
};

export default Rating;
