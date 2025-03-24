import React from "react";
import { Link } from "react-router-dom";

export const SearchTabs = () => {
  return (
    <div>
      <h1>Search</h1>
      <div>
        <Link to={"all"}>All</Link>
        <Link to={"songs"}>Songs</Link>
      </div>
    </div>
  );
};
