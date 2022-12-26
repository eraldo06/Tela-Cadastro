import React from "react";
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">Cadastrar</Link>
            <Link to={`/`}>Ver Curriculo</Link> 
           
        </header>
    )
}


export default Header;