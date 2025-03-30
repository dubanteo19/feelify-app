import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BellRing } from "lucide-react";
import { Outlet } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="flex justify-between py-2 px-4 border-b">
      <h2 className="text-2xl  ">Dashboard</h2>
      <div className="flex gap-2">
        <div className="relative p-2">
          <Badge className="absolute top-0 right-0 px-1" variant="destructive">
            3
          </Badge>
          <BellRing />
        </div>
        <div className="w-0.5 h-full bg-gray-200"></div>
        <Avatar className="bg-primary ">
          <AvatarImage src="https://cdn-icons-png.flaticon.com/512/9703/9703596.png" />
          <AvatarFallback>Admin</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 ">
      <AdminSidebar className="col-span-2 " />
      <div className="col-span-10">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};
