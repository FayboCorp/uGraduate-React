import React, {Component} from "react";
import Classbox from "../Home/Classbox/Classbox"
import './Home.css';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import {connect} from 'react-redux';

class Home extends Component{

    state = {
        sections: [],
        gpa: 5,
        clickedInfo: false,
        sectionInfo: '',
        registeredSections: []
    };

    componentDidMount() {
        console.log(this.props.jwt);
        let config = {
            headers: {
                "Authorization": this.props.jwt
            }
        };

        axios.get("http://localhost:8080/student/api/available-sections", config)
            .then(response => {
                if(this.state.sections === [] || this.state.sections !== response.data) {
                    this.setState({sections: response.data});
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.log(error);
            });
        axios.get("http://localhost:8080/student/api/register", config)
            .then(response => {
                if(this.state.registeredSections === [] || this.state.registeredSections !== response.data){
                    this.setState({registeredSections: response.data});
                }
            })
    }

    classInfoHandler = (props) => {
        this.setState({clickedInfo: true});
        this.setState({sectionInfo: props});
    };

    addClassHandler = (name, time, day, crn) =>{
        this.props.PushClass(name, time, day, crn);
    };

    render(){


        const preReg = this.props.preRegistered.map(sections => {
            return (<div className="preReg"> {sections} </div>)
        });

        const sections = this.state.sections.map(sections => {
            return (<Classbox className={sections.className} classInfo={sections} clicked={this.classInfoHandler}/>)
        });
        let information = (
            <div>
                Click on a class to see information and/or start Registration
            </div>
        );
        if(this.state.clickedInfo){

            let registerButton = (

                <div className="register" onClick={() =>
                    this.addClassHandler(this.state.sectionInfo.className,
                        this.state.sectionInfo.meetTimes,
                        this.state.sectionInfo.meetDays,
                        this.state.sectionInfo.crn)}>
                    Register
                </div>

            );
            for(let i = 0; i<this.state.registeredSections.length; i++ ){
                if(this.state.registeredSections[i].className === this.state.sectionInfo.className){
                    registerButton = (
                        <div className="register">You cannot register for this class. Please see your advisor</div>
                    )
                }
            }

            information = (
                <div style={{fontSize: '14px'}}>

                    <div style={{fontWeight: "bold"}}>{this.state.sectionInfo.className}: </div>
                    {this.state.sectionInfo.sectionDescription}
                    <br/>
                    <div style={{fontWeight: "bold"}}>Professor:</div>
                    {(this.state.sectionInfo.professor)}
                    <br/>

                    {registerButton} <br/><br/>
                    pre registered classes: {preReg}

                </div>
            );
        }
        return(
            <div>
                <Navbar/>

                <div className="cockpit">
                    <div className="progress-bar">
                        {/* Create a info page using redux */}
                        {information}
                    </div>

                    <div className="classDisplay">
                        <div>Cumulative GPA: {this.props.gpa}</div>
                        <div>Major GPA: </div>
                        <div>Classes Remaining: </div>
                        <h2 className="course-title">
                            Your Entire Course List
                        </h2>
                        {sections}
                    </div>

                </div>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        jwt: state.jwt,
        preRegistered: state.preRegistered,
        gpa: state.gpa
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        PushClass: (className, classTime, classDay, crn) => dispatch({type: 'LOAD_CLASS',
            class: className,
            time: classTime,
            day: classDay,
            crn: crn})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
