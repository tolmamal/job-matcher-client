import React, {Component} from 'react';

import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import UserPage from "./components/UserPage/UserPage";
import About from "./components/About/About"
import SignIn from "./components/SignIn/SignIn";
import Jobs from "./components/Jobs/Jobs";
import {removeToken} from "./utils/axios";
import isAuthenticated from "./components/isAuthenticated";
import HomeDesign from "./components/HomeDesign/HomeDesign";
import UserInstructions from "./components/UserInstructions/UserInstructions";


function Index() {
    return <h2>Job Matcher</h2>;
        
}

/*function About () {
    return <h2>About</h2>;
}*/


function Users() {
    return <h2>Users</h2>;
}

class LogOut extends Component {
    componentDidMount() {
        removeToken();
    }

    render() {
        return <Redirect to={'/'}>LogOut</Redirect>;
    }
}

function AppRouter() {
    return (
        <Router>
            <div className="app-container">
                {/*<Wrapping/>*/}
                <SideMenu/>
                <Switch>
                    <Route path="/" exact component={HomeDesign}/>
                    {/* <Route path="/menu/" component={SideMenu}/> */}
                    <Route path="/about/" component={About}/>
                    <Route path="/users/" component={Users}/>
                    <Route path="/signin/" component={SignIn}/>
                    <Route path="/register/" component={RegisterForm}/>
                    <Route path="/user/:id/" component={isAuthenticated(UserPage)}/>
                    <Route path="/instructions/" component={UserInstructions}/>
                    <Route path="/jobs/" component={isAuthenticated(Jobs)}/>
                    <Route path="/logout" component={isAuthenticated(LogOut)}/>
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
