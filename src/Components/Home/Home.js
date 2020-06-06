import React, {Component} from "react";
import Classbox from "../Home/Classbox/Classbox"
import './Home.css';
import axios from "axios";

class Home extends Component{

    state = {
        sections: [],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/api/sections")
            .then(response => {
                this.setState({sections: response.data});
                console.log(response.data);
            });
    }

    render(){
        const sections = this.state.sections.map(sections => {
            return (<Classbox className={sections.className}/>)
        });
        return(

            <div className="cockpit">
                <div className="progress-bar">
                    <div>Cumulative GPA: </div>
                    <div>Major GPA: </div>
                    <div>Classes Remaining: </div>
                </div>
                <div className="classDisplay">
                    {sections}
                </div>
            </div>

        );
    }

}

export default Home;
