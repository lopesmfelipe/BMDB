import React from "react";
import "./styles/general.css"
import "./styles/mangaGrid.css";

import KagurabachiCover from "../assets/images/Kagurabachi.jpg"
import SakamotoDaysCover from "../assets/images/Sakamoto-Days.jpg"
import OnePunchManCover from "../assets/images/Onepunch-Man.jpg"
import AnotherCover from "../assets/images/Another.jpg"
import BerserkCover from "../assets/images/Berserk.jpg"
import TokyoGhoulCover from "../assets/images/Toukyou-Kushu.jpg"
import AkiraCover from "../assets/images/Akira.jpg"
import HomunculusCover from "../assets/images/Homunculus.jpg"
import BlueLockCover from "../assets/images/Blue-Lock.jpg"
import SoloLevelingCover from "../assets/images/Solo-Leveling.jpg"
import TokyoRevengersCover from "../assets/images/Tokyo-Revengers.jpg"
import SunkenRockCover from "../assets/images/Sunken-Rock.jpg"



const mangaImages = [
  KagurabachiCover, 
  SakamotoDaysCover,
  OnePunchManCover,
  AnotherCover,
  BerserkCover,
  TokyoGhoulCover,
  AkiraCover,
  HomunculusCover,
  BlueLockCover,
  SoloLevelingCover,
  TokyoRevengersCover,
  SunkenRockCover
];

const Test01 = () => {
  return (
    <main>
      <section>
        <div className="mangas-grid">
          {mangaImages.map((cover, index) => (
            <div className="manga-area" key={index}>
              <div className="cover-container">
                <img className="manga-cover" src={cover} alt={`Manga ${index} + 1`} />
              </div>
              <div className="manga-title-container">
                <p>One-Punch Man</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Test01;