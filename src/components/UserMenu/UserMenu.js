import React, {
    Component
} from "react";
import "./UserMenu.css"
import About from "../About/About"
import Home from "../Home/Home"
import TimeLine from "../TimeLine/TimeLine";
import ProfileCard from "../ProfileCard/ProfileCard";
import StateStatus from "../StateStatus/StateStatus";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserInstructions from "../UserInstructions/UserInstructions";
import Preferences from "../Preferences/Preferences";
import GetUserMatch from "../GetUserMatch/GetUserMatch";
import UploadFile from "../UploadFile/UploadFile";

// new comment

class UserMenu extends Component {



    activeClass = (e) => {
        var as = document.getElementsByClassName("active");
        as[0].className = "unactive";
        var ab = document.getElementsByClassName("unactive");
        ab[e].className = "active";

    };

    homeClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "block";
        document.getElementsByClassName("UMProfile")[0].style.display = "none";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "none";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "none";
        document.getElementsByClassName("UMAbout")[0].style.display = "none";
        document.getElementsByClassName("UMInstruction")[0].style.display = "none";
        document.getElementsByClassName("UMPreferences")[0].style.display = "none";
    };

    profileClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "none";
        document.getElementsByClassName("UMProfile")[0].style.display = "block";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "none";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "none";
        document.getElementsByClassName("UMAbout")[0].style.display = "none";
        document.getElementsByClassName("UMInstruction")[0].style.display = "none";
        document.getElementsByClassName("UMPreferences")[0].style.display = "none";
    };

    cvDetailsClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "none";
        document.getElementsByClassName("UMProfile")[0].style.display = "none";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "block";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "none";
        document.getElementsByClassName("UMAbout")[0].style.display = "none";
        document.getElementsByClassName("UMInstruction")[0].style.display = "none";
        document.getElementsByClassName("UMPreferences")[0].style.display = "none";
    };

    jobDetailsClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "none";
        document.getElementsByClassName("UMProfile")[0].style.display = "none";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "none";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "block";
        document.getElementsByClassName("UMAbout")[0].style.display = "none";
        document.getElementsByClassName("UMInstruction")[0].style.display = "none";
        document.getElementsByClassName("UMPreferences")[0].style.display = "none";
    };

    aboutClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "none";
        document.getElementsByClassName("UMProfile")[0].style.display = "none";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "none";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "none";
        document.getElementsByClassName("UMAbout")[0].style.display = "block";
        document.getElementsByClassName("UMInstruction")[0].style.display = "none";
        document.getElementsByClassName("UMPreferences")[0].style.display = "none";
    };

    instructionClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "none";
        document.getElementsByClassName("UMProfile")[0].style.display = "none";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "none";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "none";
        document.getElementsByClassName("UMAbout")[0].style.display = "none";
        document.getElementsByClassName("UMInstruction")[0].style.display = "block";
        document.getElementsByClassName("UMPreferences")[0].style.display = "none";
    };

    preferencesClick = (e) => {
        this.activeClass(e);
        document.getElementsByClassName("UMHome")[0].style.display = "none";
        document.getElementsByClassName("UMProfile")[0].style.display = "none";
        document.getElementsByClassName("UMCvDetails")[0].style.display = "none";
        document.getElementsByClassName("UMJobDetails")[0].style.display = "none";
        document.getElementsByClassName("UMAbout")[0].style.display = "none";
        document.getElementsByClassName("UMInstruction")[0].style.display = "none";
        document.getElementsByClassName("UMPreferences")[0].style.display = "block";

    };

    render() {
        return (
            <div>
                <div className="topnav">
                    <a id="home" className="unactive" href="#home" onClick={(event) => this.homeClick(0)}>Home</a>
                    <a id="profile" className="active" href="#profile"
                       onClick={(event) => this.profileClick(1)}>profile</a>
                    <a id="cvDetails" className="unactive" href="#mtchJbs" onClick={(event) => this.cvDetailsClick(2)}>cv
                        details</a>
                    <a id="jobDetails" className="unactive" href="#svemtchjbs"
                       onClick={(event) => this.jobDetailsClick(3)}>job details</a>
                    <a id="about" className="unactive" href="#about" onClick={(event) => this.aboutClick(4)}>about</a>
                    <a id="instruction" className="unactive" href="#instructions"
                       onClick={(event) => this.instructionClick(5)}>instructions</a>
                    <a id="preferences" className="unactive" href="#preferences" onClick={(event) => this.preferencesClick(6)}>preferences</a>
                    <div className="search-container">
                        {/*<form action="/action_page.php">*/}
                        {/*    <input type="text" placeholder="Search.." name="search"/>*/}
                        {/*    <button type="submit"><i className="fa fa-search"></i></button>*/}
                        {/*</form>*/}
                        <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
                            <input name="search" type="hidden" value="example.com" />
                                <input autoComplete="on" name="q"  placeholder="Search " required="required" type="text" />
                                    <button className="button" type="submit">Search</button>

                        </form>
                    </div>
                </div>

                <div className="UMHome">
                    <Home/>
                </div>

                <div className="UMProfile">
                    {/*<h3>follow </h3>*/}
                    {/*<Header/>*/}

                    <ProfileCard {...this.props}/>
                    {/*<TimeLine {...this.props}/>*/}
                    <br/>
                    {/*<StateStatus {...this.props}/>*/}
                    {/*<Footer/>*/}
                </div>

                <div className="UMCvDetails">
                    <UploadFile {...this.props}/>
                </div>

                <div className="UMJobDetails">
                    <GetUserMatch {...this.props}/>
                </div>

                <div className="UMAbout">
                    <About/>
                </div>

                <div className="UMInstruction">
                    <UserInstructions/>
                </div>

                <div className="UMPreferences">
                    <Preferences {...this.props}/>
                </div>
            </div>
        );
    }
}

export default UserMenu;