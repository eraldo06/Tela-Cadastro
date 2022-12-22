import React from "react";
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow-drop-2-bottom">
            <Link to="/">Ver Vagas</Link>
            <Link to="/cadastrar">Cadastrar uma Vaga</Link>
        </header>
    )
}


export default Header;