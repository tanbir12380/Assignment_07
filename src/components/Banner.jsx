import React from "react";
import "./Our.css";
const Banner = ({ pCount, rCount }) => {
  return (
    <div id="Banner">
      <div className="BannerCard ">
        <div className="BannerCard1">
          <p className="BannerTitle">In-Progress</p>
          <p className="BannerCount">{pCount}</p>
        </div>
      </div>
      <div className="BannerCard second_card">
        <div className="BannerCard1">
          <p className="BannerTitle">Resolved</p>
          <p className="BannerCount">{rCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
