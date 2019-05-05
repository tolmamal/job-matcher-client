import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";
import "../Jobs/Jobs.css";
import "../word2vec/word2vec";
import FlipCard from "./flipCard"
import Preferences from "../Preferences/Preferences";
import "./flipCard.css"


class GetUserMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: {}
        }
    }

    getUserId = () => this.props.match.params.id;

    //const response = await axiosInstance.post(`/user/${this.getUserId()}/preferences`,{body});

    // findMatchHandler = async () => {
    //     // do not forget - add try&catch later
    //     const response = await axiosInstance.post(`/user/${this.getUserId()}/svemtchjbs`);
    //
    // };

    favHandler = () => {
        console.log('favHandler');
    };

    findJobHandler = async () => {
        try {
            const response = await axiosInstance.post(`/user/${this.getUserId()}/word2vec`);
            this.state.jobs = response.data
            console.log('response')
            console.log(response)
            console.log('this.state.jobs')
            console.log(this.state.jobs)

            // console.log('keys')
            // var dict = this.state.jobs;
            // for (var key in dict) {
            //     console.log(dict[key])}
            // for using map function
            // var dict = this.state.jobs;
            // var arr = [];
            // for (var key in dict) {
            //     arr.push(dict[key]);
            //     console.log(arr)
            // }

            var aaa = document.getElementById("aaa");
            var div = document.getElementById('aaa');
            if (div.children.length != 0)
            {
                while(div.firstChild){
                    div.removeChild(div.firstChild);
                }
            }

            var row = document.createElement("div");
            row.className = 'row';
            var i = 0;
            for (var key in this.state.jobs) {
                if (i < 4)
                    i++;
                else {
                    i = 0;
                    var row = document.createElement("div");
                    row.className = 'row';
                }
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
                var role = document.createTextNode(this.state.jobs[key][0]);
                pr.appendChild(role);
                var flipCardBack = document.createElement("div");
                flipCardBack.className = 'flip-card-back';
                var ll = document.createElement("a");
                var link = document.createTextNode(this.state.jobs[key][1]);
                ll.appendChild(link);
                ll.href = this.state.jobs[key][1];
                var ps = document.createElement("p");
                var score = document.createTextNode("Score: " + this.state.jobs[key][2].toFixed(2) * 100 + "%");
                ps.appendChild(score);
                var iconHeart = document.createElement("a");
                iconHeart.className = 'heart';
                iconHeart.id = key;
                iconHeart.onClick = this.favHandler();
                var heart = document.createElement("i");
                heart.className = 'fa fa-heart-o';
                // heart.setAttribute('aria-hidden', 'true');
                // var fullHeart = document.createElement('i');
                // fullHeart.className = "fa fa-heart";
                // iconHeart.appendChild(fullHeart);
                iconHeart.appendChild(heart);
                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(iconHeart);
                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);
                flipCard.appendChild(flipCardInner);
                column.appendChild(flipCard);
                row.appendChild(column);
                aaa.appendChild(row);

            }

            // var aaa = document.getElementById("aaa");
            // for (var key in this.state.jobs) {
            //     var pr=document.createElement("p");
            //     var role = document.createTextNode("Role: " + this.state.jobs[key][0]);
            //     var ll=document.createElement("a");
            //     var link = document.createTextNode(this.state.jobs[key][1]);
            //     // var link = document.createTextNode(<a href="+this.state.jobs[key][1]+"> show details </a>);
            //     var ps=document.createElement("p");
            //     var score = document.createTextNode("Score: " + this.state.jobs[key][2].toFixed(2)*100 + "%");
            //     var brt = document.createElement("br");
            //     var brl = document.createElement("br");
            //     var brs = document.createElement("br");
            //     pr.appendChild(role);
            //     ll.appendChild(link);
            //     ll.href=this.state.jobs[key][1]
            //     ps.appendChild(score);
            //     aaa.appendChild(pr);
            //     aaa.appendChild(brt)
            //     aaa.appendChild(ll);
            //     aaa.appendChild(brl)
            //     aaa.appendChild(ps);
            //     aaa.appendChild(brs)
            // }

        } catch (e) {
            this.setState({error: 'Cannot read the data'});
        }

    };

    render() {
        const {jobsList} = this.state;

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h3>finding your matches ...</h3>
                <br/>
                <br/>
                <br/>
                {/*<button id="find-match-button" onClick={this.findMatchHandler}>Find Match!</button>*/}
                <br/>
                {/*<div id="aaa"></div>*/}
                <button id="find-match-button" onClick={this.findJobHandler}>Find Match word2vec!</button>
                <div id="aaa"/>
                {/*<FlipCard {...this.state}/>*/}

            </div>
        );
    }
}


export default GetUserMatch;