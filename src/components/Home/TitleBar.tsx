import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  showMore: string;
}
export const TitleBar: React.FC<Props> = ({ title, showMore }) => {
  return (
    <div className="flex justify-between ">
      <h2 className="text-xl font-bold ">{title}</h2>
      <Link to={showMore}>Tất cả</Link>
    </div>
  );
};
