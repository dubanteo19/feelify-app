import { BrowserRouter as Router } from "react-router-dom";
import { UserRoutes } from "./UserRoutes";
import { AdminRoutes } from "./AdminRoutes";

export const AppRoutes = () => {
  return (
    <Router>
      <UserRoutes />
      <AdminRoutes />
    </Router>
  );
};
