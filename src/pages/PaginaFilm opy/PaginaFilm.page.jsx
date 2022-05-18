import React from "react";
import Featured from "../../components/Featured/Featured.component";
import MySwiper from "../../components/MySwiper/MySwiper.component";

export default function PaginaFilm({ type }) {
  // console.log(type);
  const genres = [
    {
      id: 28,
      name: "Azione",
    },
    {
      id: 12,
      name: "Avventura",
    },
    {
      id: 16,
      name: "Animazione",
    },
    {
      id: 35,
      name: "Commedia",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentario",
    },
    {
      id: 18,
      name: "Dramma",
    },
    {
      id: 10751,
      name: "Famiglia",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "Storia",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Musica",
    },
    {
      id: 9648,
      name: "Mistero",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Fantascienza",
    },
    {
      id: 10770,
      name: "televisione film",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Guerra",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  return (
    <div className="paginaFilm">
      <Featured category={`discover/${type}`} />
      {genres.map((element) => (
        <MySwiper
          key={element.id}
          sliderName={element.name}
          category={`discover/${type}/genre?genre=${element.id}`}
        />
      ))}
    </div>
  );
}
