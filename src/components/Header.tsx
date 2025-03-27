import { Home, LayoutList, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const SearchBar = () => {
  return (
    <div className="flex gap-1 items-center   rounded-2xl border bg-gray-100 py-1 px-2">
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
        <Link className="!text-inherit" to="/">
          <div className="rounded-full bg-primary text-white p-3">
            <Home />
          </div>
        </Link>
        <SearchBar />
      </div>
      <div className="flex gap-3">
        <Button
          style={{ fontWeight: "bold", borderRadius: 50, fontSize: 12 }}
          variant="destructive"
          className=" text-white  "
        >
          Nâng cấp tài khoản
        </Button>
        <div className="inline-block w-[2px] h-6 bg-gray-400"></div>
        <Button
          asChild
          variant="outline"
          style={{ fontWeight: "bold", borderRadius: 50, fontSize: 12 }}
        >
          <Link className="!text-gray-900" to="/signup">
            Đăng ký
          </Link>
        </Button>
        <Button
          asChild
          style={{ fontWeight: "bold", borderRadius: 50, fontSize: 12 }}
        >
          <Link className="!text-white" to="/login">
            Đăng nhập
          </Link>
        </Button>
      </div>
    </div>
  );
};
