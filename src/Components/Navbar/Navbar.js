import React from "react";
import "./Navbar.css";

const navbar = (props) => {

    return (
        <div className="height">
            <div className="rectangle">
                <div className="circle"/>

                <ul className="links">
                    <li className="link" onClick={() => props.click(1)}>
                        Home
                    </li>
                    <li className="link" onClick={() => props.click(2)}>
                        Scheduler
                    </li>
                    <li className="link" onClick={() => props.click(3)}>
                        Advisor
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
