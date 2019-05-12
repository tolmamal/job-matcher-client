import React, {
    Component
} from "react";
import "./ProfileCard.css"
import DetailsForm from "../DetailsForm/DetailsForm";
import axiosInstance from "../../utils/axios";

class ProfileCard extends Component {


    constructor(props) {
        super(props);
        console.log(props.push)
        this.state = {
            first_name: "",
            last_name: "",
            cards_amount:"",
            cards: []
        };
    };



    componentWillMount = async () => {
        const response = await axiosInstance.get(`/user/${this.props.match.params.id}/changeProfile`);
        // console.log(response.data[0]);
        const {state} = this;
        this.setState({first_name:response.data[0]});
        this.setState({last_name:response.data[1]});
        this.setState({cards_amount:response.data[3]});
        this.setState({cards: response.data[4]});

        // console.log("cards_amount: ", this.state.cards_amount);
        // console.log("cards: ", this.state.cards);


    }

    btnOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display ="block";
    };

    spanOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };




    loadCard = async (e) => {
        console.log("--- loadCard(e) ---");

        // TODO: split the msg with whitespace for display !!!
        const response = await axiosInstance.post(`/user/${this.props.match.params.id}/recommendation`);

        let lines = document.getElementsByClassName("cards-container")[0];

        let cards = document.createElement("ul");
        cards.className = "cards";

        let card = document.createElement("li");
        card.className="card";

         let line = document.createElement("h2");
         line.className="line";

         let title = document.createTextNode("Professional Recommendations");
         line.appendChild(title);

         // let par = document.createElement("p");

        card.appendChild(line);



         for(let i=0; i < this.state.cards_amount; i++)
         {

             let par = document.createElement("p");
             par.innerHTML = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';
             let msg = document.createTextNode(this.state.cards[i]);
             par.appendChild(msg);
             card.appendChild(par);
         }



         // let msg = document.createTextNode("... User Recommendations INFO ...");
         // par.appendChild(msg);

         // card.appendChild(line);
         // card.appendChild(par);

         cards.appendChild(card);
         lines.appendChild(cards);


        {/*<ul className="cards">*/}
        {/*    <li className="card">*/}
        {/*        <h1>Card 1</h1>*/}
        {/*        <p>*/}
        {/*            ... User Recommendations INFO ...*/}
        {/*        </p>*/}
        {/*    </li>*/}
        {/*</ul>*/}


        // let lines = document.getElementsByClassName("cards-container")[0];
        //
        // for(let i=0; i < this.state.cards_amount; i++)
        // {
        //
        //     let card = document.createElement("div");
        //     card.className="card";
        //     let line = document.createElement("h3");
        //     line.className="title";
        //     let title = document.createTextNode(this.state.cards[i]);
        //     line.appendChild(title);
        //     card.appendChild(line);
        //
        //     let bar = document.createElement("div");
        //     bar.className = "bar";
        //     let emptyBar = document.createElement("div");
        //     emptyBar.className = "emptybar";
        //     let filledBar = document.createElement("div");
        //     filledBar.className = "filledbar";
        //
        //     bar.appendChild(emptyBar);
        //     bar.appendChild(filledBar);
        //     card.appendChild(bar);
        //
        //     let input = document.createElement("div");
        //     input.className = "input";
        //
        //
        //     let msg = document.createTextNode(response.data[this.state.cards[i]]);
        //
        //     input.appendChild(msg);
        //     card.appendChild(input);
        //
        //
        //     lines.appendChild(card);
        //     // console.log("lines: " , lines);
        //
        // }



    };

    loadSkills = () => {
        console.log("------------ loadSkills ----------------");

        let skills = document.getElementsByClassName("ds-skill")[0];
        console.log("cards_amount: ", this.state.cards_amount);

        for(let i=0; i < this.state.cards_amount; i++)
        {
            console.log("i = ", i);
            let skill = document.createElement("div");
            skill.className = "skill";
            // skill.innerHTML = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';



            let line = document.createElement("h6");
            line.className="skill-title";
            let name = document.createTextNode(this.state.cards[i]);
            line.appendChild(name);
            skill.appendChild(line);

            skills.appendChild(skill);


        }


    };




    //TODO: add background img to this page
    //


    render() {
        const { first_name,last_name,cards_amount , cards} = this.state;
        // console.log("ProfileCard:  "+ this.props);
        return (
            <div className="main-profile-card">
                {/*<img className="background-img" src="https://i.imgur.com/CDS3Nyh.jpg"/>*/}
                <div className="profile-card">
                    <div className="ds-top"></div>
                    <div className="avatar-holder">
                        <img className="img" src="http://www.cybecys.com/wp-content/uploads/2017/07/no-profile.png" alt="photo"/>
                    </div>
                    <div className="profile-name">
                        <a href="https://codepen.io/AlbertFeynman/" target="_blank">{first_name} {last_name}</a>

                    </div>
                    <div className="ds-skill">
                        <h5>Skill <i className="fa fa-code" aria-hidden="true"></i></h5>
                        <br/>
                        <div className="skill-info">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                            <br/>
                            {/*TODO: take care of splitting cards list*/}
                            <h6>{cards}</h6>
                        </div>
                        <div className="update">
                            {/*TODO: change here -> suppose to call hen's function modal in btnOnClick()*/}
                            <a href="#" className="btn" onClick={(e)=>this.btnOnClick(100)}>Update Profile &nbsp;
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

                <div className="user-timeline">
                    <div className="timeline-item" date-is="20-7-2018">
                        <h1>Freelancer</h1>
                        <p>Web developer in Microsoft Haifa</p>
                    </div>

                    <div className="timeline-item" date-is="8-10-2015">
                        <h1>Full Stack Developer</h1>
                        <p>Web developer - all kind of projects</p>
                    </div>

                    <div className="timeline-item" date-is="10-4-2010">
                        <h1>Back-End Developer</h1>
                        <p>Back-end developer in Check Point Tel-Aviv</p>
                    </div>

                </div>


                <div className="user-recommend">

                    <div className="rcmd-btn">
                        <button onClick={(e) => this.loadCard(e)}>View Recommendations</button>

                    </div>

                    <div className="cards-container">


                    </div>
                </div>

            </div>

        );

    }
}

export default ProfileCard;
