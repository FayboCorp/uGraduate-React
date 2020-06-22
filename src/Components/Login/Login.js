import React, {Component} from "react";
import './Login.css'

class Login extends Component{

    render(){

        return(
            <div className="cockpit">
                <form action="localhost:8080/login" method="post">
                    {// TODO: Make an event listener for the login that makes a post request to the REST API}
                    <input type="text" name="username"/>
                    <input type="text" name="password"/>
                    <input type="submit" value="Submit"/>

                </form>
            </div>
        );
    }

}

export default Login;
