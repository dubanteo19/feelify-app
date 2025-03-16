import { HorizontalSongList } from "@/components/Home/HorizontalSongList";
import { trendingSongs } from "@/data/songs";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 py-4 px-10">
      <HorizontalSongList title="Trending" showMore="/trending" songs={trendingSongs} />
    </div>
  );
};
