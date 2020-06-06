import React, {Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Scheduler from './Components/Scheduler/Scheduler';
import './App.css';

// TODO: Work on getting these REST requests!

class app extends Component{
    state = {
        showHome: true,
        showScheduler: false,
        showAdvisor: false,
    };


    dynamicDisplay = (props) => {
        this.setState({showHome: false, showScheduler: false, showAdvisor: false});

        if(props === 1){
            this.setState({showHome: true});
        }
        else if(props === 2){
            this.setState({showScheduler: true});
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
