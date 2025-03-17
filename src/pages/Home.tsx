import { HorizontalArtistList } from "@/components/Home/HorizontalArtistList";
import { HorizontalSongList } from "@/components/Home/HorizontalSongList";
import { artists } from "@/data/artists";
import { trendingSongs } from "@/data/songs";

export const Home = () => {
  return (
    <div className="flex flex-col gap-6 py-4 px-10">
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
    </div>
  );
};
