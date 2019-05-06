import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";
import "../Jobs/Jobs.css";
import "../word2vec/word2vec";
import "./flipCard.css"


export default class GetUserMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: {},
            jobs_score: {},
            jobs_location: {}

        }
    };

    getUserId = () => this.props.match.params.id;

    sortScore = async () => {
        try {
            console.log('in sortScore')
            const response = await axiosInstance.post(`/user/${this.getUserId()}/sortBYscore`);
            this.state.jobs_score = response.data
            console.log('response')
            console.log(response)
            console.log('this.state.jobs_score')
            console.log(this.state.jobs_score)

            var div = document.getElementById('aaa');
            if (div.children.length != 0)
            {
                while(div.firstChild){
                    div.removeChild(div.firstChild);
                }
            }

            var row = document.createElement("div");
            row.className = 'row';
            var index = 0;
            for (var key in this.state.jobs_score) {
                var column = document.createElement("div");
                column.className = 'column';
                var flipCard = document.createElement("div");
                flipCard.className = 'flip-card';
                // flipCard.setAttribute("id", "flip-card");
                var flipCardInner = document.createElement("div");
                flipCardInner.className = 'flip-card-inner';
                var flipCardFront = document.createElement("div");
                flipCardFront.className = 'flip-card-front';
                var pr = document.createElement("p");
                var role = document.createTextNode(this.state.jobs_score[key][0]);
                pr.appendChild(role);
                var flipCardBack = document.createElement("div");
                flipCardBack.className = 'flip-card-back';
                var ll = document.createElement("a");
                var link = document.createTextNode(this.state.jobs_score[key][1]);
                ll.appendChild(link);
                ll.href = this.state.jobs_score[key][1];
                var ps = document.createElement("p");
                var score = document.createTextNode("Score: " + this.state.jobs_score[key][2].toFixed(2) * 100 + "%");
                ps.appendChild(score);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);
                flipCard.appendChild(flipCardInner);
                column.appendChild(flipCard);
                if (index < 4) {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    index = 1;
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);

                }
            }
            if (row.children.length != 0)
                div.appendChild(row);

        }
        catch (e) {
            this.setState({error: 'Cannot read the data'});
        }
    };

    sortLocation = async () => {
        try {
            console.log('in sortLocation')
            const response = await axiosInstance.post(`/user/${this.getUserId()}/sortBYlocation`);
            this.state.jobs_location = response.data
            console.log('response')
            console.log(response)
            console.log('this.state.jobs_location')
            console.log(this.state.jobs_location)

            var div = document.getElementById('aaa');
            if (div.children.length != 0)
            {
                while(div.firstChild){
                    div.removeChild(div.firstChild);
                }
            }

            var row = document.createElement("div");
            row.className = 'row';
            var index = 0;
            for (var key in this.state.jobs_location) {
                var column = document.createElement("div");
                column.className = 'column';
                var flipCard = document.createElement("div");
                flipCard.className = 'flip-card';
                // flipCard.setAttribute("id", "flip-card");
                var flipCardInner = document.createElement("div");
                flipCardInner.className = 'flip-card-inner';
                var flipCardFront = document.createElement("div");
                flipCardFront.className = 'flip-card-front';
                var pr = document.createElement("p");
                var role = document.createTextNode(this.state.jobs_location[key][0]);
                pr.appendChild(role);
                var pc = document.createElement("p");
                var city = document.createTextNode(this.state.jobs_location[key][3]);
                pc.appendChild(city);
                var flipCardBack = document.createElement("div");
                flipCardBack.className = 'flip-card-back';
                var ll = document.createElement("a");
                var link = document.createTextNode(this.state.jobs_location[key][1]);
                ll.appendChild(link);
                ll.href = this.state.jobs_location[key][1];
                var ps = document.createElement("p");
                var score = document.createTextNode("Score: " + this.state.jobs_location[key][2].toFixed(2) * 100 + "%");
                ps.appendChild(score);

                flipCardFront.appendChild(pr);
                flipCardFront.appendChild(pc);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);
                flipCard.appendChild(flipCardInner);
                column.appendChild(flipCard);
                if (index < 4) {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    index = 1;
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);

                }
            }
            if (row.children.length != 0)
                div.appendChild(row);
        }
        catch (e) {
            this.setState({error: 'Cannot read the data'});
        }
    };

    sortSelection = (c)=> {
        var btns=document.getElementsByClassName('btn_active');
        btns[1].className='btn_nothing';
        var btns=document.getElementsByClassName('btn_nothing');
        btns[c-1].className='btn_active'

        var div = document.getElementById('aaa');
        if (div.children.length != 0)
        {
            while(div.firstChild){
                div.removeChild(div.firstChild);
            }
        }

        switch (c) {
            case 6: this.sortScore();
                break;
            case 7: this.sortLocation();
                break;
            default:
                console.log(c);

        }};

    render(){
    return(
        <div>
            <h2>Sort by:</h2>
            <div className="myBtnContainer">
            <button className="btn_active" onClick={(event) =>this.sortSelection(6)}> Score </button>
            <button className="btn_nothing" onClick={(event) =>this.sortSelection(7)}> Location</button>
            </div>
        </div>
    );}
}