import { trendingSongs } from "@/data/songs";
import { formatDuration } from "@/lib/utils";
import { Song } from "@/types/Song";
import { MoreVertical, Play } from "lucide-react";

const HorizontalSongCard: React.FC<Song> = ({
  thumbnail,
  title,
  artists,
  duration = 200,
}) => {
  return (
    <div className="grid grid-cols-12  items-center  hover:bg-gray-100 group">
      <div className="col-span-6 ">
        <div className="flex space-x-4 ">
          <div className="col-span-1 h-16  w-16 rounded-lg  overflow-hidden">
            <img className="w-full h-auto object-cover" src={thumbnail} />
          </div>
          <div>
            <p className="text-lg mb-2">{title}</p>
            <p className="text-gray-600">{artists[0].name}</p>
          </div>
        </div>
      </div>
      <div className="col-span-5">{formatDuration(duration)}</div>
      <div className="col-span-1 flex space-x-4 ">
        <Play className=" transition-transform group-hover:text-primary group-hover:scale-140" />
        <MoreVertical />
      </div>
    </div>
  );
};
export const SongSearch = () => {
  const songs = trendingSongs;
  return (
    <div className="flex flex-col gap-4 mt-4">
      {songs.map((song) => (
        <HorizontalSongCard {...song} />
      ))}
    </div>
  );
};
