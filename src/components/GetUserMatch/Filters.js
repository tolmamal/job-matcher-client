import React, {Component} from 'react';
import "./FIlters.css"
import GetUserMatch from '../GetUserMatch/GetUserMatch'
import axiosInstance from "../../utils/axios";

class Filters extends Component {

    constructor(props) {
        super(props)
        // console.log("Filters",this.props)
        this.state = {
            jobs: {}
        }
    };

    getUserId = () => this.props.match.params.id;

    filterSelection = async (c) => {
        var btns = document.getElementsByClassName('btn_active');
        btns[0].className = 'btn_nothing';
        var btns = document.getElementsByClassName('btn_nothing');
        btns[c].className = 'btn_active'

        var div = document.getElementById('aaa');
        if (div.children.length != 0) {
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }

        const response = await axiosInstance.post(`/user/${this.getUserId()}/word2vec`);
        this.state.jobs = response.data

        switch (c) {
            case 0:{this.showAll();break;}
            case 1:{this.FullJob();break;}
            case 2:{this.HalfJob();break;}
            case 3:{this.StudentJob(); break;}
            case 4:{this.SendingJob();break;}
            case 5:{this.FavoriteJob();break;}
            default:{break;}
        }


    };

    showAll = () => {
        var div = document.getElementById('aaa');
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

            // var div=document.getElementsByClassName('filter')[0];
            // var text = document.createTextNode("hello");
            // text.className = "fa fa-heart-o";
            var elem=document.createElement('a');
            elem.className='heart';
            var heart=document.createElement('i');
            heart.className = "fa fa-heart";
            heart.classList.toggle('fa-heart-o')

            heart.id=key;
            // Listen for the event.
            heart.addEventListener('click', (event) =>this.func(event), false);
            elem.appendChild(heart);
            flipCardFront.appendChild(pr);
            flipCardBack.appendChild(ps);
            flipCardBack.appendChild(ll);
            var brl = document.createElement("br");
            flipCardBack.appendChild(brl);
            flipCardBack.appendChild(elem);
            // flipCardBack.appendChild(iconHeart);
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            column.appendChild(flipCard);
            if (index < 4)
            {
                row.appendChild(column);
                index++;
            }
            else {
                div.appendChild(row);
                row = document.createElement("div");
                row.className = 'row';
                row.appendChild(column);
                index =1;
            }
        }
        if(row.children.length!=0)
            div.appendChild(row);

    };

    FullJob = () => {
        var div = document.getElementById('aaa');
        var row = document.createElement("div");
        row.className = 'row';
        var index = 0;
        for (var key in this.state.jobs) {
            if (this.state.jobs[key][5] == 'full-job') {
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
                // iconHeart.onClick = this.favHandler();
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
                if (index < 4)
                {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);
                    index =1;
                }
            }
        }
        if(row.children.length!=0)
            div.appendChild(row);
    };

    HalfJob = () => {
        var div = document.getElementById('aaa');
        var row = document.createElement("div");
        row.className = 'row';
        var index = 0;
        for (var key in this.state.jobs) {
            if (this.state.jobs[key][5] == 'half-job') {
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
                // iconHeart.onClick = this.favHandler();
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
                if (index < 4)
                {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);
                    index =1;
                }
            }
        }
        if(row.children.length!=0)
            div.appendChild(row);
    };

    StudentJob = () => {
        var div = document.getElementById('aaa');
        var row = document.createElement("div");
        row.className = 'row';
        var index = 0;
        for (var key in this.state.jobs) {
            if (this.state.jobs[key][5] == 'student-job') {
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
                // iconHeart.onClick = this.favHandler();
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
                if (index < 4)
                {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);
                    index =1;
                }
            }
        }
        if(row.children.length!=0)
            div.appendChild(row);
    };

    SendingJob = () => {
        var div = document.getElementById('aaa');
        var row = document.createElement("div");
        row.className = 'row';
        var index = 0;
        for (var key in this.state.jobs) {
            if (this.state.jobs[key][4] == true) {
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
                // iconHeart.onClick = this.favHandler();
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
                if (index < 4)
                {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);
                    index =1;
                }
            }
        }
        if(row.children.length!=0)
            div.appendChild(row);
    };

    FavoriteJob = () => {
        var div = document.getElementById('aaa');
        var row = document.createElement("div");
        row.className = 'row';
        var index = 0;
        for (var key in this.state.jobs) {
            if (this.state.jobs[key][3] == true) {
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
                // iconHeart.onClick = this.favHandler();
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
                if (index < 4)
                {
                    row.appendChild(column);
                    index++;
                }
                else {
                    div.appendChild(row);
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);
                    index =1;
                }
            }
        }
        if(row.children.length!=0)
            div.appendChild(row);
    };


    func=(event)=>{
        var heart = document.getElementById(event.target.id);
        heart.classList.toggle('fa-heart-o')
    };


    render() {
        return (
            <div className="filter">
                <h2>Filter DIV Elements</h2>
                <div className="myBtnContainer">
                    <button className="btn_active" onClick={(event) =>this.filterSelection(0)}> Show all</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(1)}> FullJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(2)}> HalfJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(3)}> StudentJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(4)}> SendingJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(5)}> FavoriteJob</button>

                </div>
            </div>
        );
    }


}export default Filters
