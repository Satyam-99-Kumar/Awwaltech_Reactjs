import React from "react";
import features from "../PortfolioDetailsfeatures/PortfolioDetailsfeatures.module.scss";


export default function PortfolioDetailsintro() {
  return (
    <div>
      <div className={features.features_sect}>
        <p>Driving Features</p>
        <h1>Key Features</h1>
        <p>
          From idealation and concepualization to application development,
          ready-to-deploy aseetsFrom idealation and concepualization to
          application development, ready-to-deploy aseets
        </p>
        <div className={features.box_container}>
          <div className={features.box_row}>
            <div className={features.features_box}>
              <h2>1. Quick Search Filter</h2>
              <p>
                This is the paragraph content for box 1. It has a left border
                for better readability. user experince unique search filter This
                is the paragraph content for box 1. It has a left border for
                better readability. user experince unique search filter This is
                the paragraph content for box 1. It has a left border for better
                readability. user experince unique search filter
              </p>
            </div>
            <div className={features.features_box}>
              <h2>2. Watch Video interference-free</h2>
              <p>
                This is the paragraph content for box 1. It has a left border
                for better readability. user experince unique search filter This
                is the paragraph content for box 1. It has a left border for
                better readability. user experince unique search filter This is
                the paragraph content for box 1. It has a left border for better
                readability. user experince unique search filter
              </p>
            </div>
            <div className={features.features_box}>
              <h2>1. Quick Search Filter</h2>
              <p>
                This is the paragraph content for box 1. It has a left border
                for better readability. user experince unique search filter This
                is the paragraph content for box 1. It has a left border for
                better readability. user experince unique search filter This is
                the paragraph content for box 1. It has a left border for better
                readability. user experince unique search filter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
