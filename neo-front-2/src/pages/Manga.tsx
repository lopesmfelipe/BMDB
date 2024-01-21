import React from "react";
import KagurabachiCover from "../assets/images/kagurabachi.jpg";
import "./pagesStyle/manga.css";

const Manga = () => {
  const cover = KagurabachiCover;
  const mangaName = "Kagurabachi";
  const author = "Eichiro Oda";
  const publication = "2023";
  const description =
    "The One Piece are the friends we make along the journeyThe One Piece are the friends we make along the journeyThe One Piece are the friends we make along the journeyThe One Piece are the friends we make along the journey";

  const chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="mangatop-container">
        <img src={cover} className="cover" />
        <div className="manga-information">
          <h1> {mangaName} </h1>
          <h3> Author: {author} </h3>
          <h3> Released: {publication} </h3>
          <p> Description: {description} </p>
        </div>
      </div>
      <div className="chapters-container">
        {chapters.map((c) => (
          <div className="chap"> Chapter {c}</div>
        ))}
      </div>
    </>
  );
};

export default Manga;
