import React from "react";
import ContentHeader from "../Shared/ContentHeader/ContentHeader";
import LatestNewsCard from "../Shared/LatestNewsCard/LatestNewsCard";

const News = () => {
  return (
    <div className="container">
      <div className="mb-20">
        <ContentHeader title={"Latest News"} title_type={"News"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 place-items-center xl:px-0 gap-10">
        {[
          {
            title: "Developers watch out for these burnout symptoms",
            by: { name: "Alex Wastson", date: "10 May 2021" },
            imgLink: "./images/contents/7.jpg",
          },
          {
            title: "How to be appreciated for your hard work as a developer",
            by: { name: "Bana Green", date: "05 April 2021" },
            imgLink: "./images/contents/8.jpeg",
          },
          {
            title: "How designers and developers can collaborate better",
            by: { name: "Ave Smith", date: "22 March 2021" },
            imgLink: "./images/contents/9.jpg",
          },
        ].map((card, index) => (
          <LatestNewsCard key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default News;
