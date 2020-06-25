import React, {Component} from "react";
import Classbox from "../Home/Classbox/Classbox"
import './Home.css';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import {connect} from 'react-redux';

class Home extends Component{

    state = {
        sections: [],
        gpa: 5

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
            <div>
            <Navbar/>

            <div className="cockpit">
                <div className="progress-bar">
                    <div>Cumulative GPA: {this.props.gpa}</div>
                    <div>Major GPA: </div>
                    <div>Classes Remaining: </div>
                </div>
                <div className="classDisplay">
                    <button onClick={this.props.IncrementCounter}>Inc</button>
                    {sections}
                </div>
            </div>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return{
        gpa: state.gpa
    }
};

const mapDispatchToProps = dispatch => {

    return {
        IncrementCounter: () => dispatch({type: 'INCREMENT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
