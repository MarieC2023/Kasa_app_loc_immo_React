import PropTypes from 'prop-types';
import "./banner.css"

const Banner = ({ title, imageUrl, imageTitle }) => {
    return (
        <div className="banner">
            <img className="banner-img" src={imageUrl} alt={imageTitle} />
            <h1 className="banner-title">{title}</h1>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,   
    imageUrl: PropTypes.string.isRequired, 
    imageTitle: PropTypes.string.isRequired 
  };

export default Banner;