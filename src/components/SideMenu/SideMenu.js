import React, {Component} from 'react';
import {slide as Menu, MenuWrap} from "react-burger-menu";
import {Link} from "react-router-dom";
import "./SideMenu.css";

class SideMenu extends Component {
  
  


    render() {
        return (
            <Menu>
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="register" className="menu-item" to="/register">Register</Link>
                <Link id="about" className="menu-item" to="/about">About</Link>
                <Link id="users" className="menu-item" to="/users">Contact</Link>
                
            </Menu>
        );
    }
}

export default SideMenu;
