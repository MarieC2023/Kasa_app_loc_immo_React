import PropTypes from "prop-types";
import { useState } from "react";

import './carrousel.css';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPictures);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures);
  };

  return (
    <div className="carrousel">
      <img
        className="carrousel-img"
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      {totalPictures > 1 && (
        <>
          <button
            className="carrousel-arrow left"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="carrousel-arrow right"
            onClick={handleNext}
            aria-label="Next"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <p className="carrousel-counter">
            <span className="active-view">{currentIndex + 1}</span>/
            <span className="total-view">{totalPictures}</span>
          </p>
        </>
      )}
    </div>
  );
};

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
