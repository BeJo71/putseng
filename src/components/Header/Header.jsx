import logo from "../../assets/image6.jpeg";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#hem" className="logo-link" aria-label="Till startsidan">
          <img className="logo" src={logo} alt="PutsEng logotyp" />
        </a>

        <nav className="navigation" aria-label="Huvudmeny">
          <a href="#hem">Hem</a>
          <a href="#tjanster">Tjänster</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;