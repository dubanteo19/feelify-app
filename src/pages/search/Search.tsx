import React from "react";
import { SearchTabs } from "./SearchTabs";
import { Outlet } from "react-router-dom";

export const Search = () => {
  return (
    <div>
      <SearchTabs />
      <Outlet />
    </div>
  );
};
