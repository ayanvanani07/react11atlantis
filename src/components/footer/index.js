import react from "react";
import logo from "../../assets/logos/Atlantis_Logo_White.webp";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="full-container">
      <footer className="footer-container">
        <div className="footer-con-content">
          <div className="logo">
            <img src={logo} alt="footerLogo" />
          </div>
          <div className="footer-content">
            <div className="content">
              <div className="heading-name">Atlantis Resorts</div>
              <p className="p-padding">Atlantis Dubai</p>
              <p>Atlantis Sanya</p>
            </div>
            <div className="content">
              <div className="heading-name">Atlantis Resorts</div>
              <p className="p-padding">Atlantis Dubai</p>
              <p>Atlantis Sanya</p>
            </div>
            <div className="content">
              <div className="heading-name">Atlantis Resorts</div>
              <p className="p-padding">Atlantis Dubai</p>
              <p>Atlantis Sanya</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
