import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="heroContainer1" >
      <h4 style={{ paddingTop: "15vw" }} className="abouth4" id="aboutus">About our conference</h4>
      <h2 className="abouth2">International Conference on Application Frameworks 2021</h2>
      <p className="aboutP">
        The International conference on Aplication Frameworks - 2021
        (ICAF2021) is organized by the Faculty of Computing of the Sri Lanka
        Institute of Information Technology (SLIIT) as an open forum for
        academics along with industry professionals to present the latest
        findings and research output and practical deployments in the Computer
        Science and Information Technology domains. Primary objective of the
        ICAF is to uplift the research culture and the quality of research done
        by Sri Lankan researchers. This conference will create a platform for
        national and international researchers to showcase their research
        output, networking opportunities to discuss innovative ideas, and
        initiate collaborative work. ICAF 2020 was co-sponsorship by IEEE Sri Lanka Section and
        all publications are available in IEEE Xplore digital library
      </p>
    </div>
  );
};

export default AboutUs;
