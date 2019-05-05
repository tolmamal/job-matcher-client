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
        console.log("cards: ");
        console.log(response.data[4]);
        console.log("state.cards: ");
        console.log(state.cards);
        console.log("state.cards.length");
        console.log(state.cards.length);
        // this.setState({cards: state.cards.map(response.data[4] => response.data[4])});

        // this.setState({cards: state.cards.map(t => response.data[4])});
        // tags: state.selectedTags.map(t => t.value)
        // this.setState({cards:response.data[4]});

    }

    btnOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display ="block";
    };

    spanOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    getRecommend = async () => {

        console.log(" ******* getRecommend ************");
        const response = await axiosInstance.post(`/user/${this.props.match.params.id}/recommendation`);
        console.log(response.data);


    };

    loadCard = (e) => {



    };

    render() {
        const { first_name,last_name,cards_amount , cards} = this.state;
        // console.log("ProfileCard:  "+ this.props);
        return (
            <div>
                <h4>cards amount = {cards_amount}</h4>
                <h4>cards = {cards}</h4>
                <div className="PCMain">
                    <h2 className="PCh2">hello {first_name}  {last_name} :</h2>

                    <div className="PCcard">
                        <img className="PCImg" src="https://avatars2.githubusercontent.com/u/45991976?s=460&v=4" alt={first_name}/>
                        <p className="PCtitle"><h2>{first_name}  {last_name} </h2></p>
                        <p>
                            <button id="myBtn" className="PCbutton" onClick={(e)=>this.btnOnClick(100)}>update details</button>
                        </p>
                    </div>
                </div>

                <div id="myModal" className="PCmodal">
                    <div className="PCmodal-content">
                        <span className="PCclose" onClick={(e)=>this.spanOnClick(100)}>&times;</span>
                        {/*<p>Profile details:</p>*/}
                        <DetailsForm {...this.props}/>
                    </div>

                </div>

                <div id="user-recommend">
                    <button id="rec-btn" onClick={this.getRecommend}><strong>View your recommendations</strong></button>
                </div>
                {/*<div className="container">*/}
                {/*    <div className="card">*/}
                {/*        <h3 className="title">Card 1</h3>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="emptybar"></div>*/}
                {/*            <div className="filledbar"></div>*/}
                {/*        </div>*/}
                {/*        <div className="circle">*/}
                {/*            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <circle className="stroke" cx="60" cy="60" r="50"/>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <h3 className="title">Card 2</h3>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="emptybar"></div>*/}
                {/*            <div className="filledbar"></div>*/}
                {/*        </div>*/}
                {/*        <div className="circle">*/}
                {/*            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <circle className="stroke" cx="60" cy="60" r="50"/>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <h3 className="title">Card 3</h3>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="emptybar"></div>*/}
                {/*            <div className="filledbar"></div>*/}
                {/*        </div>*/}
                {/*        <div className="circle">*/}
                {/*            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <circle className="stroke" cx="60" cy="60" r="50"/>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <h3 className="title">Card 4</h3>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="emptybar"></div>*/}
                {/*            <div className="filledbar"></div>*/}
                {/*        </div>*/}
                {/*        <div className="circle">*/}
                {/*            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <circle className="stroke" cx="60" cy="60" r="50"/>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

            </div>

        );

    }
}

export default ProfileCard;
