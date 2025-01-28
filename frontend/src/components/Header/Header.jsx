import { NavLink } from "react-router-dom"
import logo from "@/assets/logo.svg"

import "./header.css";

const Header = () => {
    return (
        <header className="header">
           
                <img className="header-logo" src={logo} alt="Logo de l'agence Kasa" />
            <nav>
                <ul>
                    <li><NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;