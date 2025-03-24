import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Search } from "./pages/search/Search";
import { AllSearch } from "./pages/search/AllSearch";
import { SongSearch } from "./pages/search/SongSearch";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />}>
            <Route index path="all" element={<AllSearch />} />
            <Route path="songs" element={<SongSearch />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
