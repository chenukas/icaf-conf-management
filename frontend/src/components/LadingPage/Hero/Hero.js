import React from 'react'
import lady from '../../../images/conference.svg'
 
const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="heroBg"> 
                <div >
                    <img className="image" style={{width: "30vw"}} src={lady} alt="listening to a conference "/>
                </div>
            </div>
        </div>
    )
}

export default Hero
