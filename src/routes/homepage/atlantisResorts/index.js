import react from "react";
import img1 from "../../../assets/images/AtlantisThePalmDayTimeFrontalAerial.webp";
import img2 from "../../../assets/images/AtlantisTheRoyal-Exterior-Day-Shot3.webp";
import "./atlantisResorts.scss";

export default function AtlantisReports() {
  return (
    <div className="atlantisreports">
      <div className="altantisReports-container">
        <div className="text-container">
          <h2>Atlantis Resorts</h2>

          <span className="separator"></span>
          <div className="text-p">
            <p>
              Discover a world away from your everyday at our Atlantis resorts
              in Dubai and China. These iconic entertainment resorts are world
              famous for their stunning architecture, unique Rooms and Suites,
              out-of-this-world dining and thrilling attractions such as
              Aquaventure Waterpark.
            </p>
          </div>
        </div>
        <div className="cards-grid">
          <div className="card-grid-space">
            <div className="card">
              <div className="img-div">
                <img src={img1} alt="image1" />
              </div>

              <div className="card-body">
                <h4>Atlantis, The Palm</h4>
                <p>
                  This Dubai icon is the ultimate holiday destination for both
                  couples and families to make lifetime memories. From
                  thrill-seekers to foodies, sun lovers to explorers, there is
                  an unforgettable experience for everyone.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="card-grid-space">
            <div className="card">
              <div className="img-div">
                <img src={img2} alt="image2" />
              </div>

              <div className="card-body">
                <h4>Atlantis, The Palm</h4>
                <p>
                  This Dubai icon is the ultimate holiday destination for both
                  couples and families to make lifetime memories. From
                  thrill-seekers to foodies, sun lovers to explorers, there is
                  an unforgettable experience for everyone.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
