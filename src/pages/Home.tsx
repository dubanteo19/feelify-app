import { HorizontalArtistList } from "@/components/Home/HorizontalArtistList";
import { HorizontalSongList } from "@/components/Home/HorizontalSongList";
import { RecommendedSongs } from "@/components/Home/RecommendedSongs";
import { artists } from "@/data/artists";
import { trendingSongs } from "@/data/songs";
import H5AudioPlayer from "react-h5-audio-player";

export const Home = () => {
  return (
    <div className="flex flex-col gap-6 py-4 px-10 ">
      <HorizontalSongList
        title="Trending"
        showMore="/trending"
        songs={trendingSongs}
      />
      <HorizontalArtistList
        title="Nghệ sĩ nổi tiếng"
        showMore="/artists"
        artists={artists}
      />
      <RecommendedSongs />
      <H5AudioPlayer src="http://192.168.1.92:3000/music/lac.mp3" />
    </div>
  );
};
