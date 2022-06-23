import { Link } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div
      style={{ fontFamily: "arial-block" }}
      className="container flex px-5 lg:px-0 flex-col md:flex-row justify-between py-20"
    >
      <div className="pb-5 lg:pb-0">
        <h2>WAXON</h2>
        <p>PORTFOLIO TEAMPLATE</p>
      </div>
      <div className="pb-5 lg:pb-0">
        <p>
          Brook 103, <br /> 90021 New York. USA
        </p>
      </div>
      <div className="flex flex-col pb-5 lg:pb-0">
        <Link to="/" className="cursor-pointer">
          hi@waxon.com
        </Link>
        <span>+77 033 442 55 57</span>
      </div>
      <div>
        <ul className="flex">
          <li className="ml-4">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/"
              target={"_blank"}
            >
              <FacebookOutlinedIcon />
            </a>
          </li>
          <li className="ml-4">
            <a
              rel="noreferrer"
              href="https://www.twitter.com/"
              target={"_blank"}
            >
              <TwitterIcon />
            </a>
          </li>
          <li className="ml-4">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/"
              target={"_blank"}
            >
              <InstagramIcon />
            </a>
          </li>
          <li className="ml-4">
            <a
              rel="noreferrer"
              href="https://www.youtube.com/"
              target={"_blank"}
            >
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
