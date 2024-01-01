import React from "react";
import "./styles/general.css"
import "./styles/mangaGrid.css";

import KagurabachiCover from "../assets/images/Kagurabachi.jpg"

const MangaGrid = () => {

  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("../public/images", false, /\.(png |jpe?g|svg)$/));

  return (
    <>
      <main>
        <section>
          <div className="mangas-grid">
            <div className="manga-area">
              <div className="cover-container">
                <img className="manga-cover" src=/>
              </div>
              <div className="manga-title-container">
                <p>Kagurabachi</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img
                  className="manga-cover"
                  src="images/Sakamoto-Days.jpg"
                />
              </div>
              <div className="manga-title-container">
                <p>Sakamoto Days</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img
                  className="manga-cover"
                  src="images/Onepunch-Man.jpg"
                />
              </div>
              <div className="manga-title-container">
                <p>One-Punch Man</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img className="manga-cover" src="images/Blue-Lock.jpg" />
              </div>
              <div className="manga-title-container">
                <p>Blue Lock</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img
                  className="manga-cover"
                  src="images/Jujutsu-Kaisen.jpg"
                />
              </div>
              <div className="manga-title-container">
                <p>Jujutsu Kaisen</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img className="manga-cover" src="images/Sunken-Rock.jpg" />
              </div>
              <div className="manga-title-container">
                <p>Sun-ken Rock</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img className="manga-cover" src="images/Another.jpg" />
              </div>
              <div className="manga-title-container">
                <p>Another</p>
              </div>
            </div>

            <div className="manga-area">
              <div className="cover-container">
                <img
                  className="manga-cover"
                  src="images/Toukyou-Kushu.jpg"
                />
              </div>
              <div className="manga-title-container">
                <p>Tokyo Ghoul</p>
              </div>
            </div>
            <div className="manga-area">
              <div className="cover-container">
                <img
                  className="manga-cover"
                  src="images/Tokyo-Revengers.jpg"
                />
              </div>
              <div className="manga-title-container">
                <p>Tokyo-Revengers</p>
              </div>
            </div>
            <div className="manga-area">
              <div className="cover-container">
                <img
                  className="manga-cover"
                  src="images/Solo-Leveling.jpg"
                />
              </div>
              <div className="manga-title-container">
                <p>Solo Leveling</p>
              </div>
            </div>
            <div className="manga-area">
              <div className="cover-container">
                <img className="manga-cover" src="images/Homunculus.jpg" />
              </div>
              <div className="manga-title-container">
                <p>Homunculus</p>
              </div>
            </div>
            <div className="manga-area">
              <div className="cover-container">
                <img className="manga-cover" src="images/Berserk.jpg" />
              </div>
              <div className="manga-title-container">
                <p>Berserk</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MangaGrid;
