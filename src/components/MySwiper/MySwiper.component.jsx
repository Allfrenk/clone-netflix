import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./myswiper.style.scss";

export default function MySwiper(props) {
  const { sliderName, category } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    getListInfo();
  }, []);

  const getListInfo = async () => {
    await fetch(`http://localhost:2000/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  };

  console.log(list);

  return (
    <div>
      <h3>{sliderName}</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="myswiper"
      >
        {list.map((element) => (
          <>
            {element.backdrop_path ? (
              <SwiperSlide key={element.id}>
                <CardItem key={element.id} list={element} />
              </SwiperSlide>
            ) : null}
          </>
        ))}
      </Swiper>
    </div>
  );
}
