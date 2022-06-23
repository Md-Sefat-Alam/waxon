import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
export default function AboutCarousel() {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    // <!-- Your should know component start-->
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              className="slider-items owl-carousel hover:cursor-w-resize"
              {...options}
              id="slider_cat"
            >
              <div className="item">
                <div style={{ width: "320px" }} className="flex">
                  <div style={{ width: "20%" }} className="">
                    <img
                      style={{ width: "100%" }}
                      src="./images/contents/10.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 ml-5">
                    <h3 className="text-xl font-bold pb-2">Adobe Photoshop</h3>
                    <p className=" text-justify text-gray-500">
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div style={{ width: "320px" }} className="flex">
                  <div style={{ width: "20%" }} className="">
                    <img
                      style={{ width: "100%" }}
                      src="./images/contents/11.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 ml-5">
                    <h3 className="text-xl font-bold pb-2">Web Development</h3>
                    <p className=" text-justify text-gray-500">
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div style={{ width: "320px" }} className="flex">
                  <div style={{ width: "20%" }} className="">
                    <img
                      style={{ width: "100%" }}
                      src="./images/contents/12.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 ml-5">
                    <h3 className="text-xl font-bold pb-2">Creative Design</h3>
                    <p className=" text-justify text-gray-500">
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div style={{ width: "320px" }} className="flex">
                  <div style={{ width: "20%" }} className="">
                    <img
                      style={{ width: "100%" }}
                      src="./images/contents/13.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 ml-5">
                    <h3 className="text-xl font-bold pb-2">Brand Identity</h3>
                    <p className=" text-justify text-gray-500">
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
    // <!-- Your should know component end-->
  );
}
