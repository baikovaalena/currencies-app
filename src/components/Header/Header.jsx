import './Header.css';
import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="menu">
            <nav className="menu__list">
                <Link to="/" className='link'>Валюта </Link>
                <Link to="/metals" className='link'>Металлы </Link>
                <Link to="/search" className='link'>Поиск </Link>
            </nav>
        </header>
    )
}

export default Header;