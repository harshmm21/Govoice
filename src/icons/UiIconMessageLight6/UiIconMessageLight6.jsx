/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconMessageLight6 = ({ color = "#9A9FA5", className }) => {
  return (
    <svg
      className={`ui-icon-message-light-6 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M5.83337 7.49984C5.83337 7.0396 6.20647 6.6665 6.66671 6.6665H13.3334C13.7936 6.6665 14.1667 7.0396 14.1667 7.49984C14.1667 7.96007 13.7936 8.33317 13.3334 8.33317H6.66671C6.20647 8.33317 5.83337 7.96007 5.83337 7.49984Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M5.83337 10.8333C5.83337 10.3731 6.20647 10 6.66671 10H10C10.4603 10 10.8334 10.3731 10.8334 10.8333C10.8334 11.2936 10.4603 11.6667 10 11.6667H6.66671C6.20647 11.6667 5.83337 11.2936 5.83337 10.8333Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M5.59965 14.553C5.89918 14.3034 6.27673 14.1667 6.66663 14.1667H15.8333C16.2935 14.1667 16.6666 13.7936 16.6666 13.3333V5C16.6666 4.53976 16.2935 4.16667 15.8333 4.16667H4.16663C3.70639 4.16667 3.33329 4.53976 3.33329 5V16.4416L5.59965 14.553ZM6.66663 15.8333H15.8333C17.214 15.8333 18.3333 14.714 18.3333 13.3333V5C18.3333 3.61929 17.214 2.5 15.8333 2.5H4.16663C2.78591 2.5 1.66663 3.61929 1.66663 5V16.4416C1.66663 17.8547 3.31472 18.6266 4.40026 17.722L6.66663 15.8333Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UiIconMessageLight6.propTypes = {
  color: PropTypes.string,
};
