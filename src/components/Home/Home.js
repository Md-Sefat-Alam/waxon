import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container flex justify-between">
        <div
          style={{ zIndex: "999" }}
          className="w-1/4 pl-5 flex justify-start items-center"
        >
          <div className="home_name">
            <h3 className="stroke">BERNARD</h3>
            <h3>SYDNEY</h3>
            <span>Creative Web & App Developer</span>
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex justify-center items-center select-none grayscale">
          <img
            style={{ maxHeight: "93vh", transform: "rotateY(180deg)" }}
            src="./images/homeBanner/person1.png"
            alt="manPicture"
          />
        </div>
      </div>
      <div
        style={{ height: "103vh" }}
        className="absolute w-full lg:w-3/4 top-0 right-0 bg-black/10"
      ></div>
    </>
  );
};

export default Home;
