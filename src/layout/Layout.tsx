import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="grid grid-cols-12  min-h-screen    ">
      <SideBar
        className="col-span-2 
        shadow-[5px_0_35px_rgba(0,0,0,0.25)]
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
