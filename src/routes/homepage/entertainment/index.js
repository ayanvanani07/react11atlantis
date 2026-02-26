import react from "react";
import waterparkImg from "../../../assets/images/WHITEBeach-Lifestyle-SaturdayBrunch.webp";

import "./entertainment.scss";

export default function Entertainment() {
  return (
    <div className="entertainment">
      <div className="entertainment-container">
        <div className="wlw-grid">
          <div className="wlw-card-img">
            <img src={waterparkImg} alt="waterparkImg" />
          </div>
          <div className="wlw-card">
            <div className="wlw-card-body">
              <h2>Non-Stop Entertainment</h2>
              <span className="seperate"></span>
              <p>
                Atlantis Resorts are the quintessential day through to night
                entertainment destinations, offering a range of activities
                suitable for guests of all ages.
              </p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
