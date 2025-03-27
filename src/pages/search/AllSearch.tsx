import { Card } from "@/components/Home/Card";
import { HorizontalArtistList } from "@/components/Home/HorizontalArtistList";
import { SongItem } from "@/components/Home/RecommendedSongs";
import { artists } from "@/data/artists";
import { trendingSongs } from "@/data/songs";
import { Link } from "react-router-dom";

export const AllSearch = () => {
  const songs = trendingSongs;
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold ">Bài hát</h2>
        <Link to={"/"}>Tất cả</Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 space-y-2 space-x-8 mt-3">
        {songs.map((song) => (
          <div className="col-span-1">
            <SongItem {...song} />
          </div>
        ))}
      </div>
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold ">Playlist/Album</h2>
        <Link to={"/"}>Tất cả</Link>
      </div>
      <div className="grid grid-cols-6">
        {songs.slice(0, 6).map((song) => (
          <Card
            {...song}
            subtitle={song.artists[0].name}
            className="mr-6 col-span-1"
          />
        ))}
      </div>
      <HorizontalArtistList
        title="Nghệ sĩ nổi tiếng"
        showMore="/artists"
        artists={artists}
      />
    </div>
  );
};
