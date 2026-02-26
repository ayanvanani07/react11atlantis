import react from "react";
import waterparkImg from "../../../assets/images/AquaventureWaterpark-Lifestyle-TridentTower-Shockwave.webp"
import "./largestWaterpark.scss";

export default function LargestWaterpark() {
  return (
    <div className="largestwaterpart">
      <div className="largestwaterpart-container">
        <div className="wlw-grid">
          <div className="wlw-card">
            <div className="wlw-card-body">
              <h2>World’s Largest Waterpark</h2>
              <span className="seperate"></span>
              <p>
                Discover a world of award-winning adventure. A world of water
                adventures filled with thrilling rides, for the young and the
                young at heart. Where adventurers ride rapids, whilst thrill
                seekers defy gravity, and relaxers soak up the sun.
                Ground-breaking marine animal experiences and once in a lifetime
                opportunities to interact with the ocean’s most beloved
                inhabitants.
              </p>
               <button>Explore</button>
            </div>
          </div>

          <div className="wlw-card-img">
                <img src={waterparkImg} alt="waterparkImg"/>
          </div>
        </div>
      </div>
    </div>
  );
}
