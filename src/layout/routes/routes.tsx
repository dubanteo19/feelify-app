import { BrowserRouter as Router } from "react-router-dom";
import { UserRoutes } from "./UserRoutes";

export const AppRoutes = () => {
  return (
    <Router>
      <UserRoutes />
    </Router>
  );
};
