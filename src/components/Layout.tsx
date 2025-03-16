import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="grid grid-cols-12  min-h-screen ">
      <SideBar
        className="col-span-2 
        min-h-screen 
        bg-gray-100
        "
      />
      <div className="col-span-10  ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
