import { useState } from "react";
import "./Header.css";
import logo from "../../assets/image6.jpeg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="#hem"
          className="logo-link"
          aria-label="Till startsidan"
          onClick={closeMenu}
        >
          <img className="logo" src={logo} alt="PutsEng logotyp" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Öppna meny"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navigation ${menuOpen ? "navigation-open" : ""}`}
          aria-label="Huvudmeny"
        >
          <a href="#hem" onClick={closeMenu}>
            Hem
          </a>

          <a href="#galleri" onClick={closeMenu}>
            Galleri
          </a>

          <a href="#kontakt" onClick={closeMenu}>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;