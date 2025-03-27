import { Card } from "@/components/Home/Card";
import { top100 } from "@/data/top100";

export const PlaylistSearch = () => {
  const songs = top100.concat(top100);
  return (
    <div>
      <h2 className="text-xl font-bold my-4">Playlist/Album</h2>
      <div className="grid grid-cols-12 gap-5 mt-3">
        {songs.map((item) => (
          <Card key={item.id} {...item} subtitle={item.artists[0].name} />
        ))}
      </div>
    </div>
  );
};
