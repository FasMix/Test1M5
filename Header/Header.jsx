import './Header.css';
import logo from '../img/logo.svg';
import search from '../img/search.svg';
import login from '../img/log-in.svg';

const Header = () => {
    return (
        <header className="container header_cont">
            <img src={logo} alt="Logo" />
            <nav>
                <li>Каталог</li>
                <li>Галерея</li>
                <li>О лаборатории</li>
                <li>Контакты</li>
            </nav>
            <div className="nav">
                <img src={search} alt="Search" />
                <img src={login} alt="Login" />
            </div>
        </header>
    );
}

export default Header;
