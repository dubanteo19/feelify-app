import { Song } from "@/types/Song";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { TitleBar } from "./TitleBar";
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
      <TitleBar title={title} showMore={showMore} />
      <div className="grid grid-cols-12 gap-5 mt-3">
        {songs.map((item) => (
          <Card key={item.id} {...item} subtitle={item.artists[0].name} />
        ))}
      </div>
    </div>
  );
};
