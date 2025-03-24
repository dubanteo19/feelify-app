import { Separator } from "@radix-ui/react-separator";
import { SearchTabs } from "./SearchTabs";
import { Outlet } from "react-router-dom";

export const Search = () => {
  return (
    <div className=" py-5">
      <SearchTabs />
      <Separator className=" my-2 bg-gray-200 h-[1px]" />
      <div className="px-20">
        <Outlet />
      </div>
    </div>
  );
};
