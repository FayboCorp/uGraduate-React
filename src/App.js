import React, {Component} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import {Route, Redirect} from "react-router-dom";
import Home from './Components/Home/Home';
import Scheduler from './Components/Scheduler/Scheduler';
import Login from "./Components/Login/Login";
import {connect} from 'react-redux';
import './App.css';

// TODO: Work on getting these REST requests!

class app extends Component{

    render () {

        let routes = (
            <div>
                <Route path="/" component={Login}/>
            </div>
        );

        if(this.props.isAuthenticated){
            routes = (
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/scheduler" exact component={Scheduler}/>
                    <Redirect to="/home"/>
                </Switch>
            );
        }

        return (
            <BrowserRouter>
                <div>

                    {routes}

                </div>
            </BrowserRouter>
        );
    }
}

const MapStateToProps = state =>{
    return {
        isAuthenticated: state.isAuthenticated
    }
};

export default connect(MapStateToProps)(app);
