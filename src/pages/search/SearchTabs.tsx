import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { Link, useLocation  } from "react-router-dom";

interface SearchLinkProps {
  name: string;
  to: string;
}
const SearchLink: React.FC<SearchLinkProps> = ({ name, to }) => {
  const { pathname } = useLocation();
  const fullPath = `/search/${to}`;
  const active = pathname.startsWith(fullPath);
  return (
    <Link
      className={cn("!text-gray-500", active && "!font-bold !text-primary")}
      to={to}
    >
      {name}
    </Link>
  );
};
export const SearchTabs = () => {
  const searchLinks: SearchLinkProps[] = [
    { name: "TẤT CẢ", to: "tat-ca" },
    { name: "BÀI HÁT", to: "bai-hat" },
    { name: "PLAYLIST/ALBUM", to: "playlist" },
    { name: "NGHỆ SĨ", to: "artist" },
  ];
  return (
    <div className="flex space-x-10 items-center px-20">
      <h3 className="font-bold text-2xl">Kết quả tìm kiếm</h3>
      <Separator className="h-7 bg-gray-300  w-0.5" orientation="vertical" />
      <div className="flex space-x-10">
        {searchLinks.map((link) => (
          <SearchLink {...link} />
        ))}
      </div>
    </div>
  );
};
