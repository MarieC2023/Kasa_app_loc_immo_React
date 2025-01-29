import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./card.css";

const Card = ({ id, title, cover }) => {
    return (
        /**voir quel nom de balise mettre avant push idem div suivante
         * modifier le to = id avec le bon chemin --> route vers la page logement détaillé
        */
        <div className="card-content">
            <Link className="card-link" to={`/properties/${id}`}>
                <article className="card-article">
                    <h2 className="card-title">{title}</h2>
                    <img className="card-img" src={cover} alt={`${title} cover`} />
                </article>
            </Link>

        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};


export default Card;