import PropTypes from "prop-types";
import { useMemo } from "react";

import './rating.css';

const Rating = ({ stars }) => {
  const starRating = useMemo(() => Math.min(Math.max(stars, 1), 5), [stars]);

  return (
    <div className="evaluation">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`etoile ${i < starRating ? 'remplie' : ''}`}
        >
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired, // En s'attendant à un nombre pour les étoiles
};

export default Rating;
