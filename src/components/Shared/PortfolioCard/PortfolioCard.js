import React from "react";

const PortfolioCard = ({ title, siteName, imgPath }) => {
  return (
    <div className="portfolioCardWrapper w-full">
      <div
        style={{ height: "320px", width: "100%", overflow: "hidden" }}
        className="w-full flex justify-center items-center"
      >
        <img className="portfolioImage" src={imgPath} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-bold pt-4">{title}</h3>
        <span className="text-gray-500 italic pt-3 inline-block">
          {siteName}
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;
