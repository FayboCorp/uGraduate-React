import React from "react";
import "./Classbox.css";

const classbox = (props) => {



    return (
        <div className="classContainer">
            <div className="info-button" onClick={() => props.clicked(props.classInfo)}>i</div>
            {props.className}
        </div>
    );

};

export default classbox;
