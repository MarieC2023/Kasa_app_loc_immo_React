import { Link } from "react-router-dom";
import "./error.css"

const Error = () => {
    return (
        <div className="error">
        <p className="error_404">
            404
        </p>
        <p className="error_text">
            Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link to="/home">
            Retourner sur la page d&apos;accueil
        </Link>
    </div>
    );
};

export default Error;