import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="menu">
      <nav className="menu__list">
        <Link
          to="/"
          className={location.pathname === "/" ? "link-is-active" : "link"}
        >
          Валюта
        </Link>
        <Link
          to="/metals"
          className={
            location.pathname === "/metals" ? "link-is-active" : "link"
          }
        >
          Металлы
        </Link>
      </nav>
    </header>
  );
};

export default Header;
