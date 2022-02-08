import React, { useState } from "react";
import { BarChart } from "@mui/icons-material";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [nav, setnav] = useState(false);
  const handle = () => {
    setnav(!nav);
  };

  return (
    <header>
      <img
        className="logo"
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
      />

      <div className="profileContainer">
        <h2 className={nav ? "userName abbos" : "userName"}>
          <p> Abbos Akromovich</p>  
            </h2>
      </div>

      <div className="fa" onClick={handle}>
          {nav ? <FaTimes/> : <FaBars/>}

        {/* <BarChart className="toggleIcon" /> */}
      </div>
    </header>
  );
};
