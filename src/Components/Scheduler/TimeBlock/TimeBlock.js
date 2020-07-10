import React  from "react";
import './TimeBlock.css';

const timeBlock = (props) => {
    let content = (
        <div>
            X
        </div>
    );

    if(props.theClassName !== "x"){
        if(!isNaN(props.classTime)){
            return(
                <div className="filledcontainer">
                    <div className="textField">
                        {props.theClassName} <br/>
                        {props.classTime}
                    </div>
                </div>
            )
        }

    }

    return(
        <div className="container" >
            {content}
        </div>
    )


};

export default timeBlock;
