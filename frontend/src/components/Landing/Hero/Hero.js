import React from "react";
import lady from "../../../images/conference.svg";
import "./Hero.css";

const Hero = () => {
  /* const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }; */

  return (
    <div className="heroContainer row">
      <div className="col" style={{ marginLeft: "70px" }}>
        <div>
          <img className="image" src={lady} alt="listening to a conference" />
        </div>
      </div>
      <div className="col" style={{ marginRight: "70px" }}>
        <div className="heroH1 row">
          International Conference on Application Frameworks
        </div>
        <div className="heroP row" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </div>
        <div className="heroBtnWrapper">
          <button type="button" className="button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
