import { Song } from "@/types/Song";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
const SongCard: React.FC<Song> = ({ id, title, thumbnail, artists, url }) => {
  return (
    <div className="rounded-lg  flex flex-col  shadow-lg col-span-2 group">
      <div className="relative">
        <img className="w-60 h-52 rounded-lg" src={thumbnail} />
        <div
          className="bg-primary w-12 absolute bottom-2 cursor-pointer right-2 shadow-lg
          rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Play />
        </div>
      </div>
      <div className="px-1  hover:bg-gray-100">
        <p className="m-0 mt-1  text-sm cursor-pointer  hover:text-primary">
          {title}
        </p>
        <span className="text-xs text-gray-600">{artists[0].name}</span>
      </div>
    </div>
  );
};
interface Props {
  title: string;
  showMore: string;
  songs: Song[];
}
export const HorizontalSongList: React.FC<Props> = ({
  title,
  showMore,
  songs,
}) => {
  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold ">{title}</h2>
        <Link to={showMore}>Tất cả</Link>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-3">
        {songs.map((item) => (
          <SongCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
