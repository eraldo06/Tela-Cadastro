import React from "react";
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow-drop-2-bottom">
            <Link to="/">Cadastrar</Link>
            <Link to="/curriculo">Ver Curriculos</Link>
        </header>
    )
}


export default Header;