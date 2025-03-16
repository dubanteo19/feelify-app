import { Home, LayoutList, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const SearchBar = () => {
  return (
    <div className="flex gap-1 items-center rounded-2xl border bg-gray-100 py-1 px-2">
      <Search />
      <Input
        size={40}
        placeholder="Tìm kiếm bài hát"
        className="border-none shadow-none focus-visible:ring-0"
      />
      <div className="inline-block w-[2px] h-6 bg-gray-400"></div>
      <LayoutList />
    </div>
  );
};
export const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2">
      <div className="flex gap-3 ml-20">
        <div className="rounded-full bg-primary text-white p-3">
          <Home />
        </div>
        <SearchBar />
      </div>
      <div className="flex gap-3">
        <Button
          style={{ fontWeight: "bold", borderRadius: 50, fontSize: 12 }}
          className="bg-primary text-white  "
        >
          Nâng cấp tài khoản
        </Button>
        <div className="inline-block w-[2px] h-6 bg-gray-400"></div>
        <Button
          variant="secondary"
          style={{ fontWeight: "bold", borderRadius: 50, fontSize: 12 }}
        >
          Đăng ký
        </Button>
        <Button
          variant="destructive"
          style={{ fontWeight: "bold", borderRadius: 50, fontSize: 12 }}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};
