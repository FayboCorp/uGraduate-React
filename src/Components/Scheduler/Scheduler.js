import React from "react";
import Navbar from './../Navbar/Navbar';
import './Scheduler.css';

const scheduler = () => {
    return (
        <div>
            <Navbar/>
            <div className="cockpit">
            <div className="side-panel">
                <div className="side-panel-title">Unscheduled Classes</div>
            </div>

            <div className="calendar-outer">
                <ul className="times">
                    <li className="time">
                        800
                    </li>
                    <li className="time">
                        900
                    </li>
                    <li className="time">
                        1000
                    </li>
                    <li className="time">
                        1100
                    </li>
                    <li className="time">
                        1200
                    </li>
                    <li className="time">
                        1300
                    </li>
                    <li className="time">
                        1400
                    </li>
                    <li className="time">
                        1500
                    </li>
                    <li className="time">
                        1600
                    </li>
                    <li className="time">
                        1700
                    </li>

                </ul>
                <div className="calendar-inner">

                </div>
            </div>
        </div>
        </div>
    );
};

export default scheduler;
