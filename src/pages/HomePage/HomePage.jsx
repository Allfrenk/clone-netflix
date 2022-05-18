import Featured from "../../components/Featured/Featured.component";
import MySwiper from "../../components/MySwiper/MySwiper.component";

import "./homepage.style.scss";

export default function HomePage() {
  const pageSliders = [
    {
      sliderName: "Top 10 del momento",
      category: "discover/movie",
    },
    {
      sliderName: "Serie TV acclamate",
      category: "discover/tv",
    },
  ];

  return (
    <div className="home">
      <Featured category={"discover/movie"} />
      {pageSliders.map((slider) => (
        <MySwiper cliderName={slider.sliderName} category={slider.category} />
      ))}
    </div>
  );
}
