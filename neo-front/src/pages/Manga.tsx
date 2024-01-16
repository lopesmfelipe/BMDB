import React from "react";
import KagurabachiCover from ""

const Manga = () => {
  return (
    <>
      <div className="mangatop-container">
        <div> 
        <img src={KagurabachiCover} alt="Kagurabachi Cover" />
        </div>
        <div className="manga-information">
          <h1> TITLE </h1>
          <h2> DESCRIPTION </h2>
          <h2> AUTHOR </h2>
          <h2> PUBLICATION </h2>
        </div>
      </div>
      <div className="chapters-container">
        <div></div>
      </div>
    </>
  );
};

export default Manga;
