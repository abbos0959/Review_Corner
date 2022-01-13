import React from "react";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export const Header = ({ handletoggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        Review Corner <ReviewsIcon />
      </h1>
      <Button
        onClick={() => {
          handletoggleDarkMode((i) => !i);
        }}
        className="save"
      >
        <Brightness4Icon />
      </Button>
    </div>
  );
};
