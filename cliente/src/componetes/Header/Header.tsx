import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow-drop-2-bottom">
            <Link to="/">Ver Clientes</Link>
            <Link to="/cadastrar">Cadastrar cliente</Link>
        </header>
    )
}


export default Header;