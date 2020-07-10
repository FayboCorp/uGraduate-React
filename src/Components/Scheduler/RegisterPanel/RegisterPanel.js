import React from 'react';
import './RegisterPanel.css'

const registerPanel = (props) => {

    return (
        <div className="outerBox">
            <div className="text">{props.theClassName} {props.classTime}</div>
            <button className="scheduleButton" onClick={() => props.click(props.crn)}>Register</button>
        </div>
    );
};

export default registerPanel;
