import React, {
    Component
} from "react";
import "./UserMenu.css"
import About from "../About/About"
import ProfileCard from "../ProfileCard/ProfileCard";
import UserInstructions from "../UserInstructions/UserInstructions";
import Preferences from "../Preferences/Preferences";
import GetUserMatch from "../GetUserMatch/GetUserMatch";
import UploadFile from "../UploadFile/UploadFile";
import StateStatus from "../StateStatus/StateStatus";
import HomeDesign from "../HomeDesign/HomeDesign";



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
                       onClick={(event) => this.profileClick(1)}>Profile</a>
                    <a id="cvDetails" className="unactive" href="#mtchJbs" onClick={(event) => this.cvDetailsClick(2)}>CV
                        details</a>
                    <a id="jobDetails" className="unactive" href="#svemtchjbs"
                       onClick={(event) => this.jobDetailsClick(3)}>Job details</a>
                    <a id="about" className="unactive" href="#about" onClick={(event) => this.aboutClick(4)}>About</a>
                    <a id="instruction" className="unactive" href="#instructions"
                       onClick={(event) => this.instructionClick(5)}>Instructions</a>
                    <a id="preferences" className="unactive" href="#preferences" onClick={(event) => this.preferencesClick(6)}>Preferences</a>
                    <div className="search-container">
                        {/*<form action="/action_page.php">*/}
                        {/*    <input type="text" placeholder="Search.." name="search"/>*/}
                        {/*    <button type="submit"><i className="fa fa-search"></i></button>*/}
                        {/*</form>*/}
                        <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
                            <input name="search" type="hidden" value="example.com" />
                                <input autoComplete="on" name="q"  placeholder="Search " required="required" type="text" />
                                    <button className="fa fa-search" type="submit"></button>

                        </form>
                    </div>
                </div>

                <div className="UMHome">
                    <HomeDesign/>
                </div>

                <div className="UMProfile">
                    <ProfileCard {...this.props}/>


                    <br/>
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
                    <StateStatus {...this.props}/>
                </div>
            </div>
        );
    }
}

export default UserMenu;