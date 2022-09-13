import React from "react";
import {Link} from "react-router-dom";


export default function Footer(){
    return(
        <div id="footer">
            <div className="container text-center footer-content">
                <div className="row">
                    <div className="col-12 col-sm-6 mr-auto">
                        <h3 className="text-white">Language Selection</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="link">Urdu</Link></li>
                            <li><Link to="/" className="link">Arabic</Link></li>
                            <li><Link to="/" className="link">German</Link></li>
                            <li><Link to="/" className="link">Russian</Link></li>
                            <li><Link to="/" className="link">Hindi</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm">
                        <h3 className="text-white">Important Links</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="link">Home</Link></li>
                            <li><Link to="/blogs" className="link">Blogs</Link></li>
                            <li><Link to="/feedback" className="link">Feedback</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="copyright">
                <h5 className="text-center">Copyright &copy; 2020 | All Rights Reserved.</h5>
            </div>
        </div>
    )
}