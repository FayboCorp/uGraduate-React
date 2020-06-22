import React, {Component} from "react";
import './field.css';
import axios from 'axios';
import Cookies from 'js-cookie';

class field extends Component{

    state = {
        username: "",
        password: ""
    };

    submitCredentials = (props) => {
        let payload = {
            "username" : this.state.username,
            "password" : this.state.password
        };
        axios.post("//localhost:8080/login", payload)
            .then(response => {
                console.log(response);
            });
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

                <br/>
                Only showing this to see change of state
                <br/>
                Current Entered Username: {this.state.username} <br/>
                Current Entered Password: {this.state.password}
            </div>
        );
    }
}

export default field;
