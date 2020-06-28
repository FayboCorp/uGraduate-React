import React from 'react';
import './RegisterPanel.css'

const registerPanel = (props) => {



    return (
        <div className="outerBox">
            <div className="text">{props.className}</div>
            <button className="scheduleButton">Register</button>
        </div>
    );
};

export default registerPanel;
