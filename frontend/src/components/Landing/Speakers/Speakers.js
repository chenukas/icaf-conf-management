import React from 'react';
import "./Speakers.css";
import s1 from "../../../images/s1.jpeg"
import s2 from "../../../images/s2.jpeg"
import s3 from "../../../images/s3.jpeg"

const Speakers = () => {
    return (
        <div className="heroContainer2">
            <div className="row">
            <h2 className="speakerH2">Keynote Speakers</h2>
            </div>
            <div className="row">
                <img className="image2" src={s2} alt="lady" />
                <h4 style={{textAlign: 'center'}}> Lindsey Pollak </h4>
                <p style={{textAlign: 'center'}}>President and CEO of Stewart Liff & Associates, Inc.</p>
            </div>
            <div className="row image4">
                <div className="col-md-6 com-sm-12">
                <img className="image3" src={s1} alt="boy" />
                <h4> Trevor Moawad  </h4>
                <p>Creative Leadership and Performance Expert, Business Author & Consultant</p>
                </div>
                <div className="col-md-6 com-sm-12">
                <img className="image3" src={s3} alt="boy" />
                <h4> Bill Taylor  </h4>
                <p>Founding Editor, Fast Company and Best-Selling Author</p>
                </div>
            </div>


        </div>
    )
}

export default Speakers
