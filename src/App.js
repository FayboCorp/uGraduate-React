import React, {Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Scheduler from './Components/Scheduler/Scheduler';
import Login from './Components/Login/Login';
import './App.css';

// TODO: Work on getting these REST requests!

class app extends Component{
    state = {
        showLogin: true,
        showHome: false,
        showScheduler: false,
        showAdvisor: false,
    };


    dynamicDisplay = (props) => {
        this.setState({showLogin: false, showHome: false, showScheduler: false, showAdvisor: false});

        if(props === 1){
            this.setState({showHome: true});
        }
        else if(props === 2){
            this.setState({showScheduler: true});
        }
        else if(props === -1){
            this.setState({showLogin: true});
        }
        else {
            this.setState({showHome: true});
        }
    };

    render () {

        let cockpit = null;

        if(this.state.showHome){
            cockpit = (<Home/>);
        }
        else if (this.state.showScheduler){
            cockpit = (<Scheduler/>);
        }
        else if(this.state.showLogin){
            cockpit = (<Login/>);
        }
        else {
            cockpit = null;
        }

        return (
            <div>
                <Navbar click={this.dynamicDisplay}/>
                {cockpit}
            </div>
        );
    }
}

export default app;
