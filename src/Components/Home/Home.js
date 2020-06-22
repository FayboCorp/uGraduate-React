import React, {Component} from "react";
import Classbox from "../Home/Classbox/Classbox"
import './Home.css';
import axios from "axios";

class Home extends Component{

    state = {
        sections: [],
    };

    componentDidMount() {
        console.log(this.props);
        axios.get("http://localhost:8080/api/sections")
            .then(response => {
                if(this.state.sections === [] || this.state.sections === response.data) {
                    this.setState({sections: response.data});
                }

            })
            .catch(error => {
                console.log(error);
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
