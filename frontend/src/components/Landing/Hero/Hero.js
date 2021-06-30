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
      <div className="col a1 text-center">
        <div className="heroH1 ">
          <p>International Conference on Application Frameworks</p>
        </div>
        <div className="heroP" >
          <p>1st, 2nd, and 3rd July 2021 <br/>
          Sri Lanka Institute of Information Technology</p>
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
