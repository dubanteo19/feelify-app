import { cn } from "@/lib/utils";
import { SideNavItem } from "../SideBar";
import { ImageIcon, LayoutDashboardIcon, Music } from "lucide-react";

interface Props {
  className?: string;
}
export const AdminSidebar: React.FC<Props> = ({ className }) => {
  return (
    <aside
      className={cn(
        "col-span-4 flex h-screen flex-col bg-white py-6 border-r",
        className,
      )}
    >
      <h1 className="text-center text-primary text-xl">Feelify </h1>
      <div className="h-0.5 w-full bg-gray-300 my-2">.</div>
      <SideNavItem
        icon={<LayoutDashboardIcon />}
        title="Dashboard"
        target="/"
      />
      <div className="flex flex-col gap-2 mt-2">
        <h2 className="font-bold px-4 ">MUSIC</h2>
        <SideNavItem icon={<Music />} title="Thư viện" target="/" />
        <h2 className="font-bold px-4 ">ASSET</h2>
        <SideNavItem
          icon={<ImageIcon />}
          selected
          title="Image Asset"
          target="/admin/manage-assets"
        />
      </div>
    </aside>
  );
};
