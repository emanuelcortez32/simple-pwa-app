import React from "react";
import { Share } from "./Share";

const Image = ({ url, alt }) => (
  <>
    <li>
      <img src={url} alt={alt} />
    </li>
    <Share urlToShare={url} title={alt}/>
  </>
);

export default Image;
