import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">🎮 Explorador de Pokémon</h1>
      <nav className="header-nav">
        <Link to="/" className="header-link">Inicio</Link>
        <Link to="/favoritos" className="header-link">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Header;