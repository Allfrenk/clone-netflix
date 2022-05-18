import React from "react";
import Featured from "../../components/Featured/Featured.component";
import MySwiper from "../../components/MySwiper/MySwiper.component";

export default function PaginaTV({ type }) {
  // console.log(type);
  const genres = [
    {
      id: 10759,
      name: "Action & Adventure",
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
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mistero",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  return (
    <div className="paginaTV">
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
