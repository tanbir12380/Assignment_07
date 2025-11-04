import React from "react";
import "./Our.css";
const Banner = () => {
  return (
    <div id="Banner">
      <div className="BannerCard ">
        <div className="BannerCard1">
          <p className="BannerTitle">In-Progress</p>
          <p className="BannerCount">0</p>
        </div>
      </div>
      <div className="BannerCard second_card">
        <div className="BannerCard1">
          <p className="BannerTitle">Resolved</p>
          <p className="BannerCount">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
