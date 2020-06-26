import React, {Component} from "react";
import Navbar from './../Navbar/Navbar';
import './Scheduler.css';
import RegisterPanel from "./RegisterPanel/RegisterPanel";
import {connect} from 'react-redux';

class scheduler extends Component {

    // add redux state to map multiple register panels
    render() {

        const preReg = this.props.preRegistered.map(sections=>{
            return(
                <RegisterPanel className={sections}/>
            )
        });

        return (
            <div>

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
                            <div className="calendar-inner">

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
