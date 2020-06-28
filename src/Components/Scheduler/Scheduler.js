import React, {Component} from "react";
import Navbar from './../Navbar/Navbar';
import './Scheduler.css';
import RegisterPanel from "./RegisterPanel/RegisterPanel";
import TimeBlock from "./TimeBlock/TimeBlock";
import {connect} from 'react-redux';

class scheduler extends Component {

    // add redux state to map multiple register panels
    render() {

        const preReg = this.props.preRegistered.map(sections=>{
            return(
                <RegisterPanel className={sections}/>
            )
        });

        let grid = [...Array(50)];

        for(let i = 0; i< 50; i++){
            let innerClassName = '';

            grid[i] = (<TimeBlock/>)

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
        preRegistered: state.preRegistered
    }

};

export default connect(mapStateToProps)(scheduler);
