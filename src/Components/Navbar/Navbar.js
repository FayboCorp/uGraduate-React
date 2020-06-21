import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const navbar = (props) => {

    return (
        <div className="height">
            <div className="rectangle">
                <div className="circle"/>

                <ul className="links">
                    <li className="link">
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/Scheduler">Scheduler</Link>
                    </li>
                    <li className="link">
                        <Link to="/Advisor">Advisor Portal</Link>
                    </li>
                </ul>
                <div className="logoutT">
                    Logout
                </div>
            </div>

        </div>
    )
};

export default navbar;
