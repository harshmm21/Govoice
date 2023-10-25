/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Avatar = ({ face, className, customerClassName }) => {
  return (
    <div className={`avatar ${face} ${className}`}>
      <img
        className={`img ${customerClassName}`}
        alt="Customer"
        src={
          face === "two"
            ? "https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/avatar2-1.png"
            : face === "four"
            ? "https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/oliver-ragfelt-khv4fty6-d8-unsplash-1@2x.png"
            : face === "five"
            ? "https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/olena-sergienko-xttwketqccq-unsplash-1.png"
            : face === "six"
            ? "https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/nrd-zmmanliy1d4-unsplash-1.png"
            : undefined
        }
      />
    </div>
  );
};

Avatar.propTypes = {
  face: PropTypes.oneOf(["two", "three", "four", "one", "five", "six"]),
};
