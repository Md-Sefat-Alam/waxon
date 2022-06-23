import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ImageMosonary.css";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export default function ImageMasonry({
  setQuotsData,
  masonaryOrNot,
  setMasonaryOrNot,
}) {
  const quotsImageWrapper = React.useRef();
  const handleImageSlected = (e, item) => {
    const allImages = ReactDOM.findDOMNode(
      quotsImageWrapper.current
    ).getElementsByClassName("quotsImage");
    for (const iterator of allImages) {
      iterator.classList.remove("activeImage");
    }
    e.target.classList.add("activeImage");
    setQuotsData(item);
  };

  const handleMasonary = (x) => {
    if (x.matches) {
      console.log("matche");
      setMasonaryOrNot(false);
      setQuotsData([...itemData]);
    } else {
      console.log("dont matches");
      setMasonaryOrNot(true);
      setQuotsData(itemData[0]);
    }
  };

  React.useEffect(() => {
    const x = window.matchMedia("(max-width: 1024px)");
    handleMasonary(x);
    x.addListener(handleMasonary);
  }, []);
  return (
    <div
      style={masonaryOrNot ? { display: "block" } : { display: "none" }}
      ref={quotsImageWrapper}
    >
      <Box sx={{}}>
        <Masonry columns={2} spacing={5}>
          {itemData.map((item, index) => (
            <div key={index}>
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  cursor: "pointer",
                  opacity: "0.5",
                }}
                className={
                  index === 0 ? "quotsImage activeImage" : "quotsImage"
                }
                onMouseEnter={(e) => handleImageSlected(e, item)}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "./images/contents/14.jpg",
    title: "Nelly Furtado",
    occupation: "Web Developer",
    text: "I can't believe I got support and my problem resolved in just minutes from posting my question. Simply amazing team and amazing theme! Thank you very much guys for excellent support! ",
  },
  {
    img: "./images/contents/2.jpg",
    title: "Brian Ederson",
    occupation: "App Developer",
    text: "Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.",
  },

  {
    img: "https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_960_720.png",
    title: "Steve Collins",
    occupation: "Artel Corp.",
    text: "Good overall template. I am getting back into coding and had a simple question for the author. They responded within 30 minutes and answered my question. Highly recommend.",
  },
];
