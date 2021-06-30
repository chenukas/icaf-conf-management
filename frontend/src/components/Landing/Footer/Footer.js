import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="fcontainer-fluid pb-0 mb-0 justify-content-center text-light ">
    
    <footer>
        <div className="row justify-content-center mb-0 pt-5 pb-0 frow-2 px-3">
            <div className="col-12">
                <div className="row frow-2">
                    <div className="col-sm-3 text-md-center">
                        <h5><b> ICAF 2021</b></h5>
                    </div>
                    <div className="col-sm-3 my-sm-0 mt-5">
                        <ul className="list-unstyled">
                            <li className="mt-0 fli">Platform</li>
                            <li className="fli">Help Center</li>
                            <li className="fli">Security</li>
                        </ul>
                    </div>
                    <div className="col-sm-3 my-sm-0 mt-5">
                        <ul className="list-unstyled">
                            <li className="fli mt-0">Speakers</li>
                            <li className="fli">Use Cases</li>
                            <li className="fli">Events</li>
                        </ul>
                    </div>
                    <div className="col-sm-3 my-sm-0 mt-5">
                        <ul className="list-unstyled">
                            <li className="fli mt-0">Company</li>
                            <li className="fli">About</li>
                            <li className="fli">Careers- <span className="Careers">We're-hiring</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-0 pt-0 frow-1 mb-0 px-sm-3 px-2">
            <div className="col-12">
                <div className="row my-4 frow-1 no-gutters">
                    <div className="col-sm-3 col-auto text-center"><small>&#9400; ICAF </small></div>
                    <div className="col-md-3 col-auto "></div>
                    <div className="col-md-3 col-auto"></div>
                    <div className="col my-auto text-md-left text-right "> 
                    <small>
                       hello@icaf.com <span><img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid " width="25" alt="email"/></span> <span><img src="https://i.imgur.com/N90KDYM.png" className="img-fluid " width="25" alt="contact"/></span>
                    </small> </div>
                </div>
            </div>
        </div>
    </footer>
</div>
        </div>
    )
}

export default Footer
