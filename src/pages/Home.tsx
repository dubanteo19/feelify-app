import { HorizontalArtistList } from "@/components/Home/HorizontalArtistList";
import { HorizontalSongList } from "@/components/Home/HorizontalSongList";
import { HotAlbums } from "@/components/Home/HotAlbums";
import { RecommendedSongs } from "@/components/Home/RecommendedSongs";
import { artists } from "@/data/artists";
import { trendingSongs } from "@/data/songs";
import { top100 } from "@/data/top100";
import H5AudioPlayer from "react-h5-audio-player";

export const Home = () => {
  return (
    <div className="flex flex-col gap-6 py-4 px-10 ">
      <HorizontalSongList
        title="Trending"
        showMore="/trending"
        songs={trendingSongs.slice(0,6)}
      />
      <HorizontalArtistList
        title="Nghệ sĩ nổi tiếng"
        showMore="/artists"
        artists={artists}
      />
      <RecommendedSongs />
      <HorizontalSongList
        title="Top 100"
        showMore="/top100"
        songs={top100}
      />
      <HotAlbums />
      <H5AudioPlayer src="http://10.0.1.219:3000/music/lac.mp3" />
    </div>
  );
};
