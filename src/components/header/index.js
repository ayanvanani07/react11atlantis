import react from "react";
import logo from "../../assets/logos/Atlantis_Logo_White.webp";
import "./header.scss";

export default function Header() {
  return (
    <div>
      <header>
        <div className="firstHeader">
          <div className="lang">
            <span className="langOp">EN</span>
            <span className="op"> --</span>
          </div>
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="Header Logo" />
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="secondHeader">
          <nav className="navbar">
            <span>Atlantis Dubai</span>
            <span>Atlantis Sanya</span>
            <span>Careers</span>
            <span>New Developers</span>
          </nav>
        </div>
      </header>
    </div>
  );
}
