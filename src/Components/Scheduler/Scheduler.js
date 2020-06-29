import React, {Component} from "react";
import Navbar from './../Navbar/Navbar';
import './Scheduler.css';
import RegisterPanel from "./RegisterPanel/RegisterPanel";
import TimeBlock from "./TimeBlock/TimeBlock";
import {connect} from 'react-redux';
import axios from 'axios';

class scheduler extends Component {

    // TODO: import redux, add state to this component, add jwt to outgoing request...
    state = {
        jwt: null
    };

    registerClickHandler = (crn) => {

        let config = {
            headers: {
                "Authorization": this.props.jwt
            }
        };
        let classInfo = {
                "crn": JSON.stringify(crn)
            };
        axios.post("//localhost:8080/student/api/register/" + crn, classInfo, config)
            .then(response => {

            });

    };

    // add redux state to map multiple register panels
    render() {

        const preReg = this.props.preRegistered.map(sections=>{
            return(
                <RegisterPanel className={sections[0]}
                               classTime={sections[1]}
                               classDay={sections[2]}
                               crn={sections[3]}
                               click={this.registerClickHandler}/>
            )
        });

        let grid = [...Array(50)];

        for(let i = 0; i< 50; i++){
            let time;
            let day;
            let slot;
            grid[i] = (<TimeBlock className="x"/>);
            for(let j = 0; j<this.props.preRegistered.length; j++){

                time =  (parseInt(this.props.preRegistered[0][1])/100) - 8;
                day = parseInt(this.props.preRegistered[0][2]) - 1;
                slot = (5*time) + day;

                if(slot === i){
                    grid[i] = (<TimeBlock
                        className={this.props.preRegistered[0][0]}
                        classTime={this.props.preRegistered[0][1]}/>)
                }
            }

        }


        return (


            <div>

                <Navbar/>
                <div className="cockpit">
                    <div className="side-panel">
                        <div className="side-panel-title">Unscheduled Classes</div>
                        <br/>
                        <div>
                            {preReg}
                        </div>
                    </div>

                    <div className="calendar-outer">
                        <ul className="days">
                            <li className="day">
                                M
                            </li>
                            <li className="day">
                                T
                            </li>
                            <li className="day">
                                W
                            </li>
                            <li className="day">
                                H
                            </li>
                            <li className="day">
                                F
                            </li>
                        </ul>
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
                            <div className="blocks">
                                {grid}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {

    return {
        jwt: state.jwt,
        preRegistered: state.preRegistered
    }

};

export default connect(mapStateToProps)(scheduler);
