import PropTypes from "prop-types";
import Title from "./components/Title";
import Host from "./components/Host";
import Tags from "./components/Tags";
import Rating from "./components/Rating";
import Collapse from "@/components/Collapse/Collapse";

import './propertyDetails.css';

const PropertyDetails = ({
  title,
  location,
  name,
  picture,
  tags,
  rating,
  description,
  equipments,
}) => {
  return (
    <>
    <div className="details">
      <div className="details-top">
        <Title title={title} location={location} />
        <Tags tags={tags} />
      </div>
      <div className="details-middle">
        <Host name={name} picture={picture} />
        <Rating stars={rating} />
      </div>
    </div>  
    <div className="details-bottom">
        <div className="details-collapse">
          <Collapse key="Description" title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse key="Équipements" title="Équipements">
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      </>
  );
};

PropertyDetails.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired, // Modifié en PropTypes.number pour correspondre à la notation
};

export default PropertyDetails;
