import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

import "./featured.style.scss";

export default function Featured({ category }) {
  // passare category cosi da fetchare i dati a seconda della pagina
  const [firstElement, setFirstElement] = useState([]);
  //
  useEffect(() => {
    getFirstElement();
  }, []);

  const getFirstElement = async () => {
    await fetch(`http://localhost:2000/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setFirstElement(data[0]);
      });
  };

  // console.log(firstElement);

  const {
    backdrop_path,
    genre_ids,
    id,
    overview,
    poster_path,
    vote_avarage,
    title,
    name,
    first_air_date,
    release_date,
  } = firstElement;
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      {firstElement.length != 0 ? (
        <div className="featured">
          <img width={"100%"} src={`${imagePath}${backdrop_path}`} alt="" />
          <div className="info">
            <span className="element_title">
              {/* SE MOVIE HA PROPS TITLE, SE TV HA PROPS NAME */}
              {title ? title : name}
            </span>
            <span>{first_air_date ? first_air_date : release_date}</span>

            <span className="element_oveview">{overview}</span>
            <div className="buttons">
              <button className="play">
                <PlayCircleOutlineOutlinedIcon />
                <span>play</span>
              </button>
              <button className="more">
                <InfoOutlinedIcon />
                <span>info</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
