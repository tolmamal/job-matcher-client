import React, {
    Component
} from "react";
import "./ProfileCard.css"
import DetailsForm from "../DetailsForm/DetailsForm";
import axiosInstance from "../../utils/axios";

class ProfileCard extends Component {


    constructor(props) {
        super(props);
        // console.log("props.push",props.push)
        this.state = {
            first_name: "",
            last_name: "",
            cards_amount: "",
            cards: [],
            timeLine: {}
        };
    };

    getUserId = () => this.props.match.params.id;

    componentWillMount = async () => {
        try {
            const response = await axiosInstance.get(`/user/${this.props.match.params.id}/changeProfile`);
            const {state} = this;
            this.setState({first_name: response.data[0]});
            this.setState({last_name: response.data[1]});
            this.setState({cards_amount: response.data[3]});
            this.setState({cards: response.data[4]});


            let skills = document.getElementsByClassName("skill-info")[0];
            for (let i = 0; i < this.state.cards_amount; i++) {
                let skill = document.createElement("h6");
                skill.innerHTML = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';
                let skill_name = document.createTextNode("    " + this.state.cards[i]);

                skill.appendChild(skill_name);
                skills.appendChild(skill);
            }
        }catch (e) {
            console.log("error in componentWillMount in ProfuleCard!")
        }


    };

    btnOnClick = (e) => {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    };

    spanOnClick = (e) => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    deleteIDshowText() {
        var div = document.getElementsByClassName('user-timeline')[0];
        if (div.children.length != 0)
        {
            while(div.firstChild){
                div.removeChild(div.firstChild);
            }
        }
    }

    showElementInNewDivForMsg(text)
    {
        var div = document.getElementsByClassName('user-timeline')[0];
        var note = document.createElement("p");
        // var text = document.createTextNode("Failed! No cv file in your profile details");
        var br = document.createElement("br");
        note.appendChild(text);
        div.appendChild(br);
        div.appendChild(note);
    }

    loadTimeline = async (e) => {
        try {
            console.log('in function loadTimeline')
            this.deleteIDshowText();
            var txt;
            const response = await axiosInstance.post(`/user/${this.getUserId()}/UserTimeLine`);
            console.log('response.data',response.data)
            // console.log(response)
            // console.log('this.state.timeLine')
            // console.log(this.state.timeLine)
            if (response.data == 'noJobs')
            {
                var text = document.createTextNode("No details to show, you must check the cv file & job details");
                this.showElementInNewDivForMsg(text);

            }
            else if (response.data == 'NoSendingReplyDate')
            {
                var text = document.createTextNode("No details to show, you need to mark in job details sending jobs or reply job");
                this.showElementInNewDivForMsg(text);
            }
            else
            {
                this.state.timeLine = response.data;
                var div = document.getElementsByClassName("user-timeline")[0];
                for (var key in this.state.timeLine) {
                    var div2 = document.createElement("div");
                    div2.className ="timeline-item";
                    var date = document.createTextNode(key);
                    div2.appendChild(date);
                    for (let i = 0; i < this.state.timeLine[key].length; i++){
                        for (var k in this.state.timeLine[key][i]){
                            var role = document.createElement("h1");
                            var r = document.createTextNode((i+1) + '. '+this.state.timeLine[key][i][k][0]);
                            role.appendChild(r);
                            var sentORcallback = document.createElement("p");
                            var type = document.createTextNode(this.state.timeLine[key][i][k][1]);
                            sentORcallback.appendChild(type);
                            div2.appendChild(role);
                            div2.appendChild(type);
                        }
                    }
                    div.appendChild(div2);
                }

            }
        }
        catch (e) {
            this.setState({error: 'Cannot read the data'});
        }



    };

    loadCard = async (e) => {
        // console.log("--- loadCard(e) ---");

        // TODO: split the msg with whitespace for display !!!
        try {
            const response = await axiosInstance.post(`/user/${this.props.match.params.id}/recommendation`);

            let lines = document.getElementsByClassName("cards-container")[0];

            for(var i=0;i<lines.children.length;i++){
                lines.removeChild(lines.firstChild);
            }
            // if(lines.children.length === 0)
            // {
                let cards = document.createElement("ul");
                cards.className = "cards";

                let card = document.createElement("li");
                card.className = "card";

                let line = document.createElement("h2");
                line.className = "line";

                let title = document.createTextNode("Customized Professional Recommendations");
                line.appendChild(title);


                card.appendChild(line);

                let newLine = document.createElement("br");
                card.appendChild(newLine);
                console.log("if(response.data!='Faild')",response.data!='Faild',response.data);
                if(response.data!='Faild') {
                    console.log("if(response.data!='Faild')",response.data!='Faild');
                    for (let i = 0; i < this.state.cards_amount; i++) {

                        let par = document.createElement("p");
                        let fieldTitle = document.createElement("h3");
                        let field = document.createTextNode(this.state.cards[i] + ":");

                        fieldTitle.appendChild(field);
                        par.appendChild(fieldTitle);
                        card.appendChild(par);
                        let result = document.createElement("p");
                        result.innerHTML = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';
                        let msg = document.createTextNode(" " + response.data[this.state.cards[i]]);
                        result.appendChild(msg);
                        par.appendChild(result);
                        card.appendChild(par);

                        let nl = document.createElement("br");
                        card.appendChild(nl);


                    }
                }
                else{
                    let result = document.createElement("p");
                    let msg = document.createTextNode("You must upload cv file!" );
                    result.appendChild(msg);
                    card.appendChild(result);
                }


                cards.appendChild(card);
                lines.appendChild(cards);

            // }
        }catch (e) {
            console.log("catch recommendations!!");
        }



    };

    loadSkills = () => {
        let skills = document.getElementsByClassName("ds-skill")[0];
        // console.log("cards_amount: ", this.state.cards_amount);

        for (let i = 0; i < this.state.cards_amount; i++) {
            // console.log("i = ", i);
            let skill = document.createElement("div");
            skill.className = "skill";
            // skill.innerHTML = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';


            let line = document.createElement("h6");
            line.className = "skill-title";
            let name = document.createTextNode(this.state.cards[i]);
            line.appendChild(name);
            skill.appendChild(line);
            skills.appendChild(skill);
        }
    };



    render() {
        const {first_name, last_name, cards_amount, cards} = this.state;
        return (
            <div className="main-profile-card">
                <div className="profile-card">
                    <div className="ds-top"></div>
                    <div className="avatar-holder">
                        <img className="img" src="http://www.cybecys.com/wp-content/uploads/2017/07/no-profile.png"
                             alt="photo"/>
                    </div>
                    <div className="profile-name">
                        {/*<a href="https://codepen.io/AlbertFeynman/" target="_blank">{first_name} {last_name}</a>*/}
                        <a target="_blank">{first_name} {last_name}</a>

                    </div>
                    <div className="ds-skill">
                        <h5>Skill <i className="fa fa-code" aria-hidden="true"></i></h5>
                        <br/>
                        <div className="skill-info">

                        </div>
                        <div className="update">
                            <a href="#" className="btn" onClick={(e) => this.btnOnClick(100)}>Update Profile &nbsp;
                                <i className="fa fa-user-plus" ></i>
                            </a>

                        </div>

                    </div>

                </div>

                {/*<div className="PCMain">*/}
                {/*    <h2 className="PCh2">hello {first_name}  {last_name} :</h2>*/}

                {/*    <div className="PCcard">*/}
                {/*        <img className="PCImg" src="https://avatars2.githubusercontent.com/u/45991976?s=460&v=4" alt={first_name}/>*/}
                {/*        <p className="PCtitle"><h2>{first_name}  {last_name} </h2></p>*/}
                {/*        <p>*/}
                {/*            <button id="myBtn" className="PCbutton" onClick={(e)=>this.btnOnClick(100)}>update details</button>*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*TODO: change in form - instead of interest should be fields need UPDATE on DB also!*/}
                <div id="myModal" className="PCmodal">
                    <div className="PCmodal-content">
                        <span className="PCclose" onClick={(e)=>this.spanOnClick(100)}>&times;</span>
                        {/*<p>Profile details:</p>*/}
                        <DetailsForm {...this.props}/>
                    </div>

                </div>
                {/*<div id="show-text-timeLine"/>*/}
                <div className="user-timeline"/>
                <div className="user-recommend">

                    <div className="rcmd-btn">
                        <a href="#" className="botn" onClick={(e) => this.loadTimeline()}>
                            Refresh&nbsp;Time Line&nbsp;
                            <span className="shift">›</span>
                        </a>
                        <div className="mask"/>
                    </div>
                    <br/>
                    <br/>

                </div>

                {/*<div className="user-timeline">*/}
                    {/*<div className="timeline-item" date-is="20-7-2018">*/}
                    {/*    <h1>Freelancer</h1>*/}
                    {/*    <p>Web developer in Microsoft Haifa</p>*/}
                    {/*</div>*/}

                    {/*<div className="timeline-item" date-is="8-10-2015">*/}
                    {/*    <h1>Full Stack Developer</h1>*/}
                    {/*    <p>Web developer - all kind of projects</p>*/}
                    {/*</div>*/}

                    {/*<div className="timeline-item" date-is="10-4-2010">*/}
                    {/*    <h1>Back-End Developer</h1>*/}
                    {/*    <p>Back-end developer in Check Point Tel-Aviv</p>*/}
                    {/*</div>*/}

                {/*</div>*/}


                <div className="user-recommend">

                    <div className="rcmd-btn">
                        {/*<button onClick={(e) => this.loadCard(e)}>View Recommendations</button>*/}
                        <a href="#" className="botn" onClick={(e) => this.loadCard(100)}>
                            View&nbsp;Recommendations&nbsp;
                            <span className="shift">›</span>
                        </a>
                        <div className="mask"/>
                    </div>
                    <br/>

                    <div className="cards-container"/>

                </div>
                {/*<div className="user-status">*/}
                {/*    <StateStatus {...this.props}/>*/}

                {/*</div>*/}

            </div>

        );

    }
}

export default ProfileCard;
