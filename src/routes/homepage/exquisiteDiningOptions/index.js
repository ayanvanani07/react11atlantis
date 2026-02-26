import react from "react";
import img1 from "../../../assets/images/ATR-CELEB-CHEFS-2880x1920px.webp";
import img2 from "../../../assets/images/WhiteBeach-Food-CrispyEggplantMilleFeuilles.webp";
import "./exquisiteDiningOptions.scss";

export default function ExquisiteDiningOptions() {
  return (
    <div>
      <div className="options-container">
        <div className="text-container">
          <h2>Exquisite Dining Options</h2>

          <span className="separator"></span>
          <div className="text-p">
            <p>
              You will never struggle to find the perfect meal at Atlantis with
              each resort boasting restaurants from numerous world renowned
              Michelin Star chefs.
            </p>
          </div>
          <button>Explore</button>
        </div>
        <div className="img-container">
          <div className="img">
            <img src={img2} alt="img2" />
          </div>
          <div className="img">
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
}
