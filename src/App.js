import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Scheduler from './Components/Scheduler/Scheduler';
import Login from "./Components/Login/Login";
import './App.css';

// TODO: Work on getting these REST requests!

class app extends Component{

    render () {

        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Login}/>

                    <Route path="/Home" render={props =>
                        <div>
                            <Home/>
                            <Navbar/>
                        </div>
                    }/>

                    <Route path="/Scheduler" exact component={Scheduler}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default app;
