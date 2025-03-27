import { Card } from "@/components/Home/Card";

import { artists } from "@/data/artists";
export const ArtistSearch = () => {
  const data = artists.concat(artists);
  return (
    <div className="min-h-screen">
      <h2 className="text-xl font-bold my-4">Nghệ sĩ</h2>
      <div className="grid grid-cols-12 gap-5 mt-3">
        {data.map((item) => (
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
