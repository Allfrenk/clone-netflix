import "./carditem.style.scss";

import { useState } from "react";
import { Card } from "react-bootstrap";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function CardItem({ list }) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    backdrop_path,
    first_air_date,
    // genre_ids,
    id,
    media_type,
    overview,
    poster_path,
    release_date,
    title,
    name,
    // vote_avarage,
  } = list;
  const imagePath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return <>{backdrop_path ? <img src={imagePath} alt="" /> : null}</>;
}
