import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Instructions from "./components/Instructions/Instructions";


function Index() {
    return <h2>Job Matcher</h2>;
        
}

function About () {
    return <h2>About</h2>;
}


function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
        <Router>
            <div className="app-container">
                <SideMenu/>
                <Switch>
                    <Route path="/" exact component={Index}/>
                    {/* <Route path="/menu/" component={SideMenu}/> */}
                    <Route path="/about/" component={About}/>
                    <Route path="/users/" component={Users}/>
                    <Route path="/register/" component={RegisterForm}/>
                    <Route path="/instructions/" component={Instructions}/>
                    {/* <Route path="/user/:id/" component={UserPage}/> */}
                </Switch>
            </div>
        </Router>
    )
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <AppRouter/>
            </div>
        );
    }
}

export default App;
