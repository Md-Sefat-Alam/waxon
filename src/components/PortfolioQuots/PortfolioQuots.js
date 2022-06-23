import React, { useState } from "react";
import "./PortfolioQuots.css";
import ContentHeader from "../Shared/ContentHeader/ContentHeader";
import ImageMasonry from "../Shared/Masonary/ImageMasonary";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar } from "@mui/material";

const PortfolioQuots = () => {
  const [masonaryOrNot, setMasonaryOrNot] = React.useState(true);
  const [quotsData, setQuotsData] = useState({
    img: "./images/contents/14.jpg",
    title: "Steve Collins",
    occupation: "Web Developer",
    text: "I can't believe I got support and my problem resolved in just minutes from posting my question. Simply amazing team and amazing theme! Thank you very much guys for excellent support! ",
  });
  return (
    <div className="container">
      <div className="mb-20">
        <ContentHeader title={"What clients say"} title_type={"Testimonial"} />
      </div>
      <div
        id="portfolioQuots"
        className="flex flex-col lg:flex-row justify-center px-10 xl:px-0"
      >
        {masonaryOrNot ? (
          <div className="left w-1/2 flex flex-col justify-center">
            <FormatQuoteIcon sx={{ fontSize: "110px", color: "#4169e1" }} />
            <p className="text mx-5 text-xl">{quotsData?.text}</p>
            <div className="flex items-center mt-5">
              <Avatar
                alt="Remy Sharp"
                src={quotsData?.img}
                sx={{ width: 56, height: 56 }}
              />
              <div className="ml-5">
                <h3 className="font-mono text-xl font-bold">
                  {quotsData?.title}
                </h3>
                <span className="text-sm text-gray-400 itelic">
                  {quotsData?.occupation}
                </span>
              </div>
            </div>
          </div>
        ) : (
          quotsData.map((single) => (
            <div className="left w-full lg:w-1/2 px-5 flex flex-col justify-center mb-10">
              <FormatQuoteIcon sx={{ fontSize: "110px", color: "#4169e1" }} />
              <p className="text mx-5 text-xl">{single?.text}</p>
              <div className="flex items-center mt-5">
                <Avatar
                  alt="Remy Sharp"
                  src={single?.img}
                  sx={{ width: 56, height: 56 }}
                />
                <div className="ml-5">
                  <h3 className="font-mono text-xl font-bold">
                    {single?.title}
                  </h3>
                  <span className="text-sm text-gray-400 itelic">
                    {single?.occupation}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="right w-0 lg:w-1/2">
          <ImageMasonry
            setQuotsData={setQuotsData}
            masonaryOrNot={masonaryOrNot}
            setMasonaryOrNot={setMasonaryOrNot}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioQuots;
