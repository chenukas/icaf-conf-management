import React, { useState } from "react";
import lady from "../../../images/conference.svg";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="heroContainer row">
      <div className="col">
        <div>
          <img
            className="image"
            style={{ width: "30vw" }}
            src={lady}
            alt="listening to a conference"
          />
        </div>
      </div>
      <div className="col">
        <div className="heroH1">Topic of th Conference</div>
        <div className="heroP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </div>
        <div className="heroBtnWrapper">
          <div to="/#" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started 
            {/* {hover ? <arrowForward /> : <arrowRight />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
