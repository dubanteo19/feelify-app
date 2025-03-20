import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingSongs } from "@/data/songs";
import { Card } from "./Card";
import { TitleBar } from "./TitleBar";
export const HotAlbums = () => {
  const songs = trendingSongs;
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div>
      <TitleBar title="Album Hot" showMore="hot-album" />
      <Slider {...settings} >
        {songs.map((song) => (
          <Card {...song}  subtitle={song.artists[0].name} className="mr-6" />
        ))}
      </Slider>
    </div>
  );
};
