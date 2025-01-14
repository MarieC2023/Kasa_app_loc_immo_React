import logo from "@/assets/logo.svg"

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="Logo de l'agence Kasa" />
            <p className="footer-p"> © 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;