import { AdminLayout } from "@/layout/AdminLayout";
import { Dashboard } from "@/pages/admin/Dashboard";
import { ManageArtists } from "@/pages/admin/ManageArtists";
import { ManageAssets } from "@/pages/admin/ManageAssets";
import { Route, Routes } from "react-router-dom";
export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="manage-assets" element={<ManageAssets />} />
        <Route path="manage-artists" element={<ManageArtists />} />
      </Route>
    </Routes>
  );
};
