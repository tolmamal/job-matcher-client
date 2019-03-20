import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import RegisterForm from "./components/RegisterForm/RegisterForm";
<<<<<<< HEAD
import UserPage from "./components/UserPage/UserPage";


=======
import About from "./components/About/About"
import Instructions from "./components/Instructions/Instructions";
>>>>>>> 7f733f4dcae6601417519dc53d4444d656c05a5e


function Index() {
    return <h2>Job Matcher</h2>;
        
}

/*function About () {
    return <h2>About</h2>;
}*/


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
<<<<<<< HEAD
                    <Route path="/user/:id/" component={UserPage}/> 
=======
                    <Route path="/instructions/" component={Instructions}/>
                    {/* <Route path="/user/:id/" component={UserPage}/> */}
>>>>>>> 7f733f4dcae6601417519dc53d4444d656c05a5e
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
