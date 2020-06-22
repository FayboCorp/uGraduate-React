import React, {Component} from "react";
import './Login.css';
import Field from './Field/Field'

class Login extends Component{

    render(){

        return(
            <div className="cockpit">
                <Field/>
            </div>
        );
    }

}

export default Login;
