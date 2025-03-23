import { Song } from "@/types/Song";
import { TitleBar } from "./TitleBar";
import { trendingSongs } from "@/data/songs";
import { Ellipsis, Heart, Play } from "lucide-react";

const SongItem: React.FC<Song> = ({ id, thumbnail, artists, title }) => {
  return (
    <div key={id} className="grid grid-cols-6 gap-3 hover:bg-gray-200 p-2 rounded-sm group">
      <div className="col-span-1 rounded-sm relative overflow-hidden">
        <img className="w-12 h-12 " src={thumbnail} />
        <div
          className="opacity-0 absolute w-12 h-12 top-0 left-0 flex justify-center 
          items-center cursor-pointer text-white group-hover:opacity-100 group-hover:bg-gray-900/70  "
        >
          <Play />
        </div>
      </div>
      <div className="col-span-5 flex justify-between items-center">
        <div>
          <p className="truncate max-w-[200px] group-hover:max-w-[180px]">
            {title}
          </p>
          <p className="text-sm text-gray-600">{artists[0].name}</p>
        </div>
        <div className="gap-2 hidden  group-hover:flex">
          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <Heart size={17} />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <Ellipsis size={17} />
          </div>
        </div>
      </div>
    </div>
  );
};
export const RecommendedSongs = () => {
  const songs = trendingSongs;
  return (
    <div>
      <TitleBar title="Gợi ý cho bạn" showMore="/" />
      <div className="grid grid-cols-3 grid-rows-3 space-y-2 space-x-8 mt-3">
        {songs.map((song) => (
          <div className="col-span-1">
            <SongItem {...song} />
          </div>
        ))}
      </div>
    </div>
  );
};
