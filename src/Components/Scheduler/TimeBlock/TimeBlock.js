import React  from "react";
import './TimeBlock.css';

const timeBlock = (props) => {
    let content = (
        <div>
            X
        </div>
    );

    if(props.className !== "x"){
        if(!isNaN(props.classTime)){
            return(
                <div className="container">
                    <div className="textField">
                        {props.className} <br/>
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
