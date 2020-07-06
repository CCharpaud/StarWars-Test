// React
import React from "react";

// Style
import "../Header/style.css";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="headerContainer">
          <img
            className="background"
            src={
              "https://data3.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-battlefront-2/celebration-edition/SWBF2_Celebration_Edition_pdp_prefeature_FeatureName_en_ww_v1.jpg/6ee2bf6c-c2d6-4dd7-a211-e84b67b4062f/original.jpg"
            }
            alt="background"
          />
          <span className="text">
            Welcome !!!! <br />
            young padawan
          </span>
        </div>
      </div>
    </header>
  );
}
