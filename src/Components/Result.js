/* eslint-disable jsx-a11y/alt-text */

import React from "react"
import "../styles/Result.css"

const Result = (props) => {
    return (
      <div className="result">
        <img src={props.src} className="imgsvg  img" />
      </div>
    );
  };
export default Result