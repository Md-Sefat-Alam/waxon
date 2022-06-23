import React from "react";
import ContentHeader from "../Shared/ContentHeader/ContentHeader";
import "./About.css";

const About = () => {
  return (
    <div className="container px-5 flex flex-col lg:flex-row items-center md:justify-between">
      <div className="left w-full lg:w-2/5">
        <img src="./images/contents/2.jpg" alt="manPicture" />
      </div>
      <div className="right w-full lg:w-3/5 md:pl-20">
        <div className="pb-10 border-b-2">
          <ContentHeader title={"Bernard Sydney"} title_type={"About"} />
          <span className="about_title">Creative Web & App Developer</span>
        </div>
        <div className="about_detail mt-10">
          <p>
            My name is Bernard Sydney. I am a Web Developer, and I'm very
            passionate and dedicated to my work.
          </p>
          <p>
            With 20 years experience as a professional Web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
        </div>
        <div>
          <button
            style={{ transition: "all .3s ease", boxSizing: "border-box" }}
            className="px-10 italic text-white py-4 bg-blue-800 hover:bg-white border-2 border-blue-800 hover:text-blue-800"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
