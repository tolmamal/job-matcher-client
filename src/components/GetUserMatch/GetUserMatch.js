import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";
import "../Jobs/Jobs.css";
import "../word2vec/word2vec";
import Sort from "./Sort"
import "./flipCard.css"


class GetUserMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: {},
            jobs_score: {},
            jobs_location: {}

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
        var div=document.getElementsByClassName('fa fa-heart-o')[0];
        console.log(div);
        div.addEventListener('click', (event) =>this.func(), false);
        div.classList.toggle("fa-heartbeat");
        console.log('finish favHandle');
    };

    func = () => {
        console.log('func');

        // this.classList.toggle("fa-thumbs-down");
    }

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
            for (var key in this.state.jobs) {
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

                iconHeart.onClick = this.favHandler();
                iconHeart.id = key;

                var heart = document.createElement("i");
                heart.className = 'fa fa-heart-o';

                // var el = document.getElementById('a');
                // if (el) {
                //     addEventListener('click', function (e) {
                //         favHandler();
                //     });
                // };

                // heart.onClick = this.favHandler();

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

            // this.favHandler();


        } catch (e) {
            this.setState({error: 'Cannot read the data'});
        }

    };

    // filterScoreHandler = async () => {
    //     try {
    //         const response = await axiosInstance.post(`/user/${this.getUserId()}/sortBYscore`);
    //         this.state.jobs_score = response.data
    //         console.log('response')
    //         console.log(response)
    //         console.log('this.state.jobs_score')
    //         console.log(this.state.jobs_score)
    //
    //         var aaa = document.getElementById("aaa");
    //         var div = document.getElementById('aaa');
    //         if (div.children.length != 0)
    //         {
    //             while(div.firstChild){
    //                 div.removeChild(div.firstChild);
    //             }
    //         }
    //
    //         var row = document.createElement("div");
    //         row.className = 'row';
    //         var i = 0;
    //         for (var key in this.state.jobs_score) {
    //             if (i < 4)
    //                 i++;
    //             else {
    //                 i = 0;
    //                 var row = document.createElement("div");
    //                 row.className = 'row';
    //             }
    //             var column = document.createElement("div");
    //             column.className = 'column';
    //             var flipCard = document.createElement("div");
    //             flipCard.className = 'flip-card';
    //             // flipCard.setAttribute("id", "flip-card");
    //             var flipCardInner = document.createElement("div");
    //             flipCardInner.className = 'flip-card-inner';
    //             var flipCardFront = document.createElement("div");
    //             flipCardFront.className = 'flip-card-front';
    //             var pr = document.createElement("p");
    //             var role = document.createTextNode(this.state.jobs_score[key][0]);
    //             pr.appendChild(role);
    //             var flipCardBack = document.createElement("div");
    //             flipCardBack.className = 'flip-card-back';
    //             var ll = document.createElement("a");
    //             var link = document.createTextNode(this.state.jobs_score[key][1]);
    //             ll.appendChild(link);
    //             ll.href = this.state.jobs_score[key][1];
    //             var ps = document.createElement("p");
    //             var score = document.createTextNode("Score: " + this.state.jobs_score[key][2].toFixed(2) * 100 + "%");
    //             ps.appendChild(score);
    //
    //             flipCardFront.appendChild(pr);
    //             flipCardBack.appendChild(ps);
    //             flipCardBack.appendChild(ll);
    //             var brl = document.createElement("br");
    //             flipCardBack.appendChild(brl);
    //             flipCardInner.appendChild(flipCardFront);
    //             flipCardInner.appendChild(flipCardBack);
    //             flipCard.appendChild(flipCardInner);
    //             column.appendChild(flipCard);
    //             row.appendChild(column);
    //             aaa.appendChild(row);
    //         }
    //
    //     }
    //     catch (e) {
    //         this.setState({error: 'Cannot read the data'});
    //     }
    // };

    // filterLocationHandler = async () => {
    //     try {
    //         const response = await axiosInstance.post(`/user/${this.getUserId()}/sortBYlocation`);
    //         this.state.jobs_location = response.data
    //         console.log('response')
    //         console.log(response)
    //         console.log('this.state.jobs_location')
    //         console.log(this.state.jobs_location)
    //
    //     }
    //     catch (e) {
    //         this.setState({error: 'Cannot read the data'});
    //     }
    // };

    myFunction = () => {
        var div=document.getElementsByClassName('fa fa-heart-o')[0];
        // var text = document.createTextNode("hello");
        // var elem=document.createElement('button');
        // elem.appendChild(text);

        // Listen for the event.
        div.addEventListener('click', (event) =>this.func(), false);

        // target can be any Element or other EventTarget.
        // div.appendChild(elem);
        //
        div.classList.toggle("fa-heartbeat");
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h3>finding your matches ...</h3>
                <br/>
                <br/>
                <br/>
                <Sort {...this.props}/>
                {/*<button id="find-match-button" onClick={this.findMatchHandler}>Find Match!</button>*/}
                <br/>
                {/*<div id="aaa"></div>*/}
                {/*<button id="find-match-button" onClick={this.filterLocationHandler}>Find Match By LOCATION Order!</button>*/}
                {/*<button id="find-match-button" onClick={this.filterScoreHandler}>Find Match By SCORE Order!</button>*/}
                <button id="find-match-button" onClick={this.findJobHandler}>Find Match word2vec!</button>
                <div id="aaa"/>
                {/*<FlipCard {...this.state}/>*/}
                <br/>
                <br/>
                <br/>
                {/*<i onClick={(event) => this.myFunction()} className="fa fa-heart-o"></i>*/}
            </div>
        );
    }


}

export default GetUserMatch;