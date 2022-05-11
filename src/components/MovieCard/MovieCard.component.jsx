import React, { useState, useEffect } from "react";

export default function MovieCard() {
  const [movie, setMovie] = useState(null);
  const api_key = "944143a810402073e91619e119fa95ef";
  //
  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = () => {
    fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${api_key}`).then(
      (response) => console.log(response)
    );
  };
  //
  return <h1>MovieCard</h1>;
}
