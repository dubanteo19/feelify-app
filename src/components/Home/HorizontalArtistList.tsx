import { Link } from "react-router-dom";
import { Card } from "./Card";
import { Artist } from "@/types/Artist";
interface Props {
  title: string;
  showMore: string;
  artists: Artist[];
}
export const HorizontalArtistList: React.FC<Props> = ({
  title,
  showMore,
  artists,
}) => {
  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold ">{title}</h2>
        <Link to={showMore}>Tất cả</Link>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-3">
        {artists.map((item) => (
          <Card
            title={item.name}
            thumbnail={item.thumbnail}
            url={""}
            key={item.id}
            rounded
            subtitle="Artist"
          />
        ))}
      </div>
    </div>
  );
};
