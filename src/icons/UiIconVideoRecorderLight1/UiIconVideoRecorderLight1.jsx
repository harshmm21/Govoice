/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconVideoRecorderLight1 = ({ color = "#6F767E", className }) => {
  return (
    <svg
      className={`ui-icon-video-recorder-light-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.166 12.8571V13.3333C14.166 14.714 13.0467 15.8333 11.666 15.8333H4.16602C2.7853 15.8333 1.66602 14.714 1.66602 13.3333V6.66663C1.66602 5.28591 2.7853 4.16663 4.16602 4.16663H11.666C13.0467 4.16663 14.166 5.28591 14.166 6.66663V7.14281L15.6973 6.04904C16.8004 5.26111 18.3327 6.04965 18.3327 7.40527V12.5946C18.3327 13.9503 16.8004 14.7388 15.6973 13.9509L14.166 12.8571ZM4.16602 5.83329H11.666C12.1263 5.83329 12.4993 6.20639 12.4993 6.66663V13.3333C12.4993 13.7935 12.1263 14.1666 11.666 14.1666H4.16602C3.70578 14.1666 3.33268 13.7935 3.33268 13.3333V6.66663C3.33268 6.20639 3.70578 5.83329 4.16602 5.83329ZM14.166 10.8089L16.666 12.5946V7.40527L14.166 9.19098V10.8089Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UiIconVideoRecorderLight1.propTypes = {
  color: PropTypes.string,
};
