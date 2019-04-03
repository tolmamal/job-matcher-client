import React, {
    Component
} from "react";
import "./UserMenu.css"



class UserMenu extends Component {

    activeClass(){
        var as = document.getElementsByClassName("active");
        as.className="";
        return "active";

    };
    
    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="" href="#mtchJbs">match jobs</a>
                    <a className="" href="#svemtchjbs"  onClick={this.activeClass}>saved match jobs</a>
                    <a className="" href="#apldjbs" >applied jobs</a>
                    <a className="" href="#crradc" >creer advices</a>
                    <div className="search-container">
                        <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div>

                </div>

            </div>
        );
    }       
}
export default UserMenu;