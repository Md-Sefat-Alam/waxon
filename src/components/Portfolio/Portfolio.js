import React from "react";
import ContentHeader from "../Shared/ContentHeader/ContentHeader";
import PortfolioCard from "../Shared/PortfolioCard/PortfolioCard";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="mb-20">
        <ContentHeader title={"Featured Works"} title_type={"Portfolio"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 xl:px-0 xl:grid-cols-3 gap-12">
        {[
          {
            title: "Sween Cherry",
            siteName: "Vimeo",
            imgPath: "./images/contents/1.jpg",
          },
          {
            title: "Delicious Fruit",
            siteName: "Youtube",
            imgPath: "./images/contents/1.jpg",
          },
          {
            title: "Blue Lemon",
            siteName: "Soundcloud",
            imgPath: "./images/contents/1.jpg",
          },
          {
            title: "Yellow Phone",
            siteName: "Image",
            imgPath: "./images/contents/4.jpg",
          },
          {
            title: "Ice Cream",
            siteName: "Image",
            imgPath: "./images/contents/5.jpg",
          },
          {
            title: "Good Present",
            siteName: "Image",
            imgPath: "./images/contents/6.jpg",
          },
        ].map((portfolio, index) => (
          <PortfolioCard
            key={index}
            title={portfolio.title}
            siteName={portfolio.siteName}
            imgPath={portfolio.imgPath}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
