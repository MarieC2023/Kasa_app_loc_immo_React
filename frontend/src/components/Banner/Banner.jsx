import PropTypes from 'prop-types';
import "./banner.css"

const Banner = ({ title, imageUrl, imageTitle }) => {
    return (
        <section className="banner-content">
            <img className="banner-img" src={imageUrl} alt={imageTitle} />
            {title && <h1 className="banner-title">{title}</h1>}
        </section>
    );
};

Banner.propTypes = {
    title: PropTypes.node,
    imageUrl: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired
};

export default Banner;