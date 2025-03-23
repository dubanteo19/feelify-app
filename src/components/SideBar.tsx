import clsx from "clsx";
import {
  ChartSpline,
  CircleDot,
  LayoutList,
  ListMusic,
  Music,
  Star,
  History,
  Heart,
  Disc3,
} from "lucide-react";
import { Button } from "./ui/button";

interface SideNavItemProps {
  icon: any;
  title: string;
  target: string;
  selected?: boolean;
  color?: string;
}
const SideNavItem: React.FC<SideNavItemProps> = ({
  icon,
  title,
  target,
  selected,
  color,
}) => {
  return (
    <div>
      <div
        key={target}
        className={clsx(
          "flex text-sm items-center gap-2 py-2 px-4 ",
          selected ? "text-primary bg-gray-200" : "hover:text-primary",
        )}
      >
        <span
          className={clsx(
            "text-sm bg",
            color ? `${color}  text-white rounded-full p-1` : "",
          )}
        >
          {icon}
        </span>
        {title}
      </div>
    </div>
  );
};
const UpgradePremiumBanner = () => {
  return (
    <div
      className="flex flex-col items-center mx-3 shadow-xl justify-between px-2 py-4
      bg-linear-90 from-primary to-primary-foreground rounded-lg"
    >
      <span className="text-[12px] text-center text-white font-bold">
        Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
      </span>
      <Button
        variant="secondary"
        className="mt-3 "
        style={{ fontSize: 13, fontWeight: "bold" }}
      >
        NÂNG CẤP TÀI KHOẢN
      </Button>
    </div>
  );
};
export const SideBar: React.FC<{ className?: string }> = ({ className }) => {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0EgcCC6cETYRVMh3erlxvKfLD91n7eVsYQ&s";
  return (
    <div className={className}>
      <div className="flex p-2 ml-2">
        <img className="h-8 w-8" src={logo}></img>
      </div>
      <div className="flex flex-col gap-2">
        <SideNavItem selected icon={<Music />} title="Thư viện" target="/" />
        <SideNavItem icon={<CircleDot />} title="Khám phá" target="/" />
        <SideNavItem icon={<ChartSpline />} title="#Fellchart" target="/" />
        <div className="px-5">
          <hr className="h-0.5 bg-gray-200"></hr>
        </div>
        <SideNavItem icon={<ListMusic />} title="BXH nhạc" target="/" />
        <SideNavItem
          icon={<LayoutList />}
          title="Chủ đề & Thể loại"
          target="/"
        />
        <SideNavItem icon={<Star />} title="Top 50" target="/" />
        <UpgradePremiumBanner />
        <SideNavItem
          icon={<History />}
          color="bg-primary"
          title="Nghe gần đây"
          target="/"
        />
        <SideNavItem
          icon={<Heart />}
          color="bg-pink-600"
          title="Bài hát yêu thích"
          target="/"
        />
        <SideNavItem
          icon={<Heart />}
          color="bg-yellow-500"
          title="Playlist"
          target="/"
        />
        <SideNavItem
          icon={<Disc3 />}
          color="bg-red-500"
          title="Album"
          target="/"
        />
      </div>
    </div>
  );
};
