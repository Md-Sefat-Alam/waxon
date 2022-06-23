import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function LatestNewsCard({ cardData }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "2px 0px 20px 3px rgba(0, 0, 0, 0.1)",
        borderRadius: "0",
      }}
    >
      <Box sx={{ height: "230px", overflow: "hidden" }}>
        <Link to="/">
          <CardMedia
            component="img"
            image={cardData.imgLink}
            sx={{ height: "230px" }}
            className=" hover:scale-110 transition-all overflow-hidden shadow-xl"
            alt="green iguana"
          />
        </Link>
      </Box>
      <CardContent>
        <div className="p-4">
          <div className="mb-3">
            <span className="text-gray-400 italic text-sm">
              By{" "}
              <Link to="/" className="hover:text-black">
                {cardData.by.name}
              </Link>{" "}
              / {cardData.by.date}
            </span>
          </div>
          <hr />
          <div>
            <Link
              to="/"
              className="text-xl font-bold py-3 inline-block font-mono"
            >
              {cardData.title}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
