import  { useState } from "react";
import PropTypes from "prop-types";

import "./collapse.css";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="collapse-title">
                {title}
                <i className="fa-solid fa-chevron-up collapse-icon"></i>
            </button>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};


Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Collapse;
