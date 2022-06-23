import React from "react";
import "./ContentHeader.css";

const ContentHeader = ({ title, title_type }) => {
  return (
    <h3 className="titleName pl-2">
      {title}
      <span className="hidden xl:inline-block title_bg">{title_type}</span>
    </h3>
  );
};

export default ContentHeader;
