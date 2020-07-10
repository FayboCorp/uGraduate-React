import React, {Component} from "react";
import './field.css';
import axios from 'axios';
import {connect} from 'react-redux'

class field extends Component{

    state = {
        username: "",
        password: "",
        jwt: null
    };

    submitCredentials = (props) => {
        let payload = {
            "username" : this.state.username,
            "password" : this.state.password
        };
        axios.post("//localhost:8080/login", payload)
            .then(response => {
                if(response.status.toString() === '200'){
                    this.props.LoadBearer(response.headers.authorization);
                }
            })
            .catch(error => {
                console.log(error);
            });

    };

    showSections = () => {


    };

    render() {

        return (
            <div>
                <div className="username">
                    <input placeholder="Enter Your Username"
                           type="text"
                           onChange={(event)=>{this.setState({username:event.target.value})}}/>
                </div>
                <br/>
                <div className="password">
                    <input placeholder="Enter Your Password"
                           type="text"
                           onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </div>

                <button className="submitButton" onClick={this.submitCredentials}>Submit</button>

            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        jwt: state.jwt
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        LoadBearer: (token) => dispatch({type: 'LOAD_BEARER', bearer: token})
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(field);
