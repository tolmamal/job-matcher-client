import React, {Component} from 'react';
import "./FIlters.css"
import GetUserMatch from '../GetUserMatch/GetUserMatch'
import axiosInstance from "../../utils/axios";


class Filters extends Component{

    constructor(props) {
        super(props);
        // // console.log("Filters",this.props)
        this.state = {
            jobs: {}
        };
    };

    getUserId = () => this.props.match.params.id;

    componentWillMount= async()=> {
        const response = await axiosInstance.post(`/user/${this.getUserId()}/word2vec`);
        console.log("responce-Fillter",response)
        if (response.data==null){
            console.log("responce-Fillter")
            var div = document.getElementById('aaa');
            var note = document.createElement("p");
            var txtNote = document.createTextNode("You must upload cv file!");
            note.appendChild(txtNote);
            div.appendChild(note);
        }
        else
            this.state.jobs = response.data
    };

    filterSelection = async(c) => {
        var div = document.getElementById('aaa');
        if (div.children.length != 0) {
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }
        const response = await axiosInstance.post(`/user/${this.getUserId()}/word2vec2`);
        // console.log("responce-Fillter",response)
        if (response.data==null){
            // console.log("responce-Fillter",response.data)
            var div = document.getElementById('aaa');
            var note = document.createElement("p");
            var txtNote = document.createTextNode("You must upload cv file!");
            note.appendChild(txtNote);
            div.appendChild(note);
        }
        else
            this.state.jobs = response.data

        var btns = document.getElementsByClassName('btn_active');
        btns[0].className = 'btn_nothing';
        var btns = document.getElementsByClassName('btn_nothing');
        btns[c].className = 'btn_active';

        switch (c) {
            case 0:{this.showAll();break;}
            case 1:{this.FullJob();break;}
            case 2:{this.HalfJob();break;}
            case 3:{this.StudentJob(); break;}
            case 4:{this.SendingJob();break;}
            case 5:{this.FavoriteJob();break;}
            case 6:{this.ReplyJob();break;}
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
            //heart element
            var elem=document.createElement('a');
            elem.className='heart';
            var heart=document.createElement('i');
            if(this.state.jobs[key][4]==true)
                heart.className = "fa fa-heart";
            else {
                heart.className = "fa fa-heart";
                heart.classList.toggle('fa-heart-o');
            }
            heart.id=key;
            heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
            elem.appendChild(heart);

            //send element
            var elem1=document.createElement('a');
            elem1.className='send';
            var send=document.createElement('i');
            if(this.state.jobs[key][5]==true) {
                send.className = "fa fa-paper-plane";
            }
            else {
                send.className = "fa fa-paper-plane";
                send.classList.toggle('fa-paper-plane-o');
            }
            send.id=key+"send";
            send.addEventListener('click', (event) =>this.UpdateSending(event), false);
            elem1.appendChild(send);

            //replay element
            var elem2=document.createElement('a');
            elem2.className='replay';
            var replay=document.createElement('i');
            if(this.state.jobs[key][6]==true)
                replay.className = "fa fa-check-square-o";
            else {
                replay.className = "fa fa-square-o";
                replay.classList.toggle('fa-check-square-o');
            }
            replay.id=key+"replay";
            replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
            elem2.appendChild(replay);

            flipCardFront.appendChild(pr);
            flipCardBack.appendChild(ps);
            flipCardBack.appendChild(ll);
            var brl = document.createElement("br");
            flipCardBack.appendChild(brl);
            flipCardBack.appendChild(elem);
            flipCardBack.appendChild(elem1);
            flipCardBack.appendChild(elem2);
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
            if (this.state.jobs[key][3] == 'full') {
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
                var elem=document.createElement('a');
                elem.className='heart';
                //heart element
                var elem=document.createElement('a');
                elem.className='heart';
                var heart=document.createElement('i');
                if(this.state.jobs[key][4]==true)
                    heart.className = "fa fa-heart";
                else {
                    heart.className = "fa fa-heart";
                    heart.classList.toggle('fa-heart-o');
                }
                heart.id=key;
                heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
                elem.appendChild(heart);

                //send element
                var elem1=document.createElement('a');
                elem1.className='send';
                var send=document.createElement('i');
                if(this.state.jobs[key][5]==true)
                    send.className = "fa fa-paper-plane";
                else {
                    send.className = "fa fa-paper-plane";
                    send.classList.toggle('fa-paper-plane-o');
                }
                send.id=key+"send";
                send.addEventListener('click', (event) =>this.UpdateSending(event), false);
                elem1.appendChild(send);

                //replay element
                var elem2=document.createElement('a');
                elem2.className='replay';
                var replay=document.createElement('i');
                if(this.state.jobs[key][6]==true)
                    replay.className = "fa fa-check-square-o";
                else {
                    replay.className = "fa fa-square-o";
                    replay.classList.toggle('fa-check-square-o');
                }
                replay.id=key+"replay";
                replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
                elem2.appendChild(replay);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(elem);
                flipCardBack.appendChild(elem1);
                flipCardBack.appendChild(elem2);
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
            if (this.state.jobs[key][3] == 'half') {
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
                //heart element
                var elem=document.createElement('a');
                elem.className='heart';
                var heart=document.createElement('i');
                if(this.state.jobs[key][4]==true)
                    heart.className = "fa fa-heart";
                else {
                    heart.className = "fa fa-heart";
                    heart.classList.toggle('fa-heart-o');
                }
                heart.id=key;
                heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
                elem.appendChild(heart);

                //send element
                var elem1=document.createElement('a');
                elem1.className='send';
                var send=document.createElement('i');
                if(this.state.jobs[key][5]==true)
                    send.className = "fa fa-paper-plane";
                else {
                    send.className = "fa fa-paper-plane";
                    send.classList.toggle('fa-paper-plane-o');
                }
                send.id=key+"send";
                send.addEventListener('click', (event) =>this.UpdateSending(event), false);
                elem1.appendChild(send);

                //replay element
                var elem2=document.createElement('a');
                elem2.className='replay';
                var replay=document.createElement('i');
                if(this.state.jobs[key][6]==true)
                    replay.className = "fa fa-check-square-o";
                else {
                    replay.className = "fa fa-square-o";
                    replay.classList.toggle('fa-check-square-o');
                }
                replay.id=key+"replay";
                replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
                elem2.appendChild(replay);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(elem);
                flipCardBack.appendChild(elem1);
                flipCardBack.appendChild(elem2);
                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);
                flipCard.appendChild(flipCardInner);
                column.appendChild(flipCard);
                if (index < 4) {
                    row.appendChild(column);
                    index++;
                } else {
                    div.appendChild(row);
                    row = document.createElement("div");
                    row.className = 'row';
                    row.appendChild(column);
                    index = 1;
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
            if (this.state.jobs[key][3] == 'student') {
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
                //heart element
                var elem=document.createElement('a');
                elem.className='heart';
                var heart=document.createElement('i');
                if(this.state.jobs[key][4]==true)
                    heart.className = "fa fa-heart";
                else {
                    heart.className = "fa fa-heart";
                    heart.classList.toggle('fa-heart-o');
                }
                heart.id=key;
                heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
                elem.appendChild(heart);

                //send element
                var elem1=document.createElement('a');
                elem1.className='send';
                var send=document.createElement('i');
                if(this.state.jobs[key][5]==true)
                    send.className = "fa fa-paper-plane";
                else {
                    send.className = "fa fa-paper-plane";
                    send.classList.toggle('fa-paper-plane-o');
                }
                send.id=key+"send";
                send.addEventListener('click', (event) =>this.UpdateSending(event), false);
                elem1.appendChild(send);

                //replay element
                var elem2=document.createElement('a');
                elem2.className='replay';
                var replay=document.createElement('i');
                if(this.state.jobs[key][6]==true)
                    replay.className = "fa fa-check-square-o";
                else {
                    replay.className = "fa fa-square-o";
                    replay.classList.toggle('fa-check-square-o');
                }
                replay.id=key+"replay";
                replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
                elem2.appendChild(replay);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(elem);
                flipCardBack.appendChild(elem1);
                flipCardBack.appendChild(elem2);
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
            if (this.state.jobs[key][5] == true) {
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
                //heart element
                var elem=document.createElement('a');
                elem.className='heart';
                var heart=document.createElement('i');
                if(this.state.jobs[key][4]==true)
                    heart.className = "fa fa-heart";
                else {
                    heart.className = "fa fa-heart";
                    heart.classList.toggle('fa-heart-o');
                }
                heart.id=key;
                heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
                elem.appendChild(heart);

                //send element
                var elem1=document.createElement('a');
                elem1.className='send';
                var send=document.createElement('i');
                if(this.state.jobs[key][5]==true)
                    send.className = "fa fa-paper-plane";
                else {
                    send.className = "fa fa-paper-plane";
                    send.classList.toggle('fa-paper-plane-o');
                }
                send.id=key+"send";
                send.addEventListener('click', (event) =>this.UpdateSending(event), false);
                elem1.appendChild(send);

                //replay element
                var elem2=document.createElement('a');
                elem2.className='replay';
                var replay=document.createElement('i');
                if(this.state.jobs[key][6]==true)
                    replay.className = "fa fa-check-square-o";
                else {
                    replay.className = "fa fa-square-o";
                    replay.classList.toggle('fa-check-square-o');
                }
                replay.id=key+"replay";
                replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
                elem2.appendChild(replay);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(elem);
                flipCardBack.appendChild(elem1);
                flipCardBack.appendChild(elem2);
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
                //heart element
                var elem=document.createElement('a');
                elem.className='heart';
                var heart=document.createElement('i');
                if(this.state.jobs[key][4]==true)
                    heart.className = "fa fa-heart";
                else {
                    heart.className = "fa fa-heart";
                    heart.classList.toggle('fa-heart-o');
                }
                heart.id=key;
                heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
                elem.appendChild(heart);

                //send element
                var elem1=document.createElement('a');
                elem1.className='send';
                var send=document.createElement('i');
                if(this.state.jobs[key][5]==true)
                    send.className = "fa fa-paper-plane";
                else {
                    send.className = "fa fa-paper-plane";
                    send.classList.toggle('fa-paper-plane-o');
                }
                send.id=key+"send";
                send.addEventListener('click', (event) =>this.UpdateSending(event), false);
                elem1.appendChild(send);

                //replay element
                var elem2=document.createElement('a');
                elem2.className='replay';
                var replay=document.createElement('i');
                if(this.state.jobs[key][6]==true)
                    replay.className = "fa fa-check-square-o";
                else {
                    replay.className = "fa fa-square-o";
                    replay.classList.toggle('fa-check-square-o');
                }
                replay.id=key+"replay";
                replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
                elem2.appendChild(replay);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(elem);
                flipCardBack.appendChild(elem1);
                flipCardBack.appendChild(elem2);
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

    ReplyJob = () => {
        var div = document.getElementById('aaa');
        var row = document.createElement("div");
        row.className = 'row';
        var index = 0;
        for (var key in this.state.jobs) {
            if (this.state.jobs[key][6] == true) {
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
                //heart element
                var elem=document.createElement('a');
                elem.className='heart';
                var heart=document.createElement('i');
                if(this.state.jobs[key][4]==true)
                    heart.className = "fa fa-heart";
                else {
                    heart.className = "fa fa-heart";
                    heart.classList.toggle('fa-heart-o');
                }
                heart.id=key;
                heart.addEventListener('click', (event) =>this.UpdateFavorite(event), false);
                elem.appendChild(heart);

                //send element
                var elem1=document.createElement('a');
                elem1.className='send';
                var send=document.createElement('i');
                if(this.state.jobs[key][5]==true)
                    send.className = "fa fa-paper-plane";
                else {
                    send.className = "fa fa-paper-plane";
                    send.classList.toggle('fa-paper-plane-o');
                }
                send.id=key+"send";
                send.addEventListener('click', (event) =>this.UpdateSending(event), false);
                elem1.appendChild(send);

                //replay element
                var elem2=document.createElement('a');
                elem2.className='replay';
                var replay=document.createElement('i');
                if(this.state.jobs[key][6]==true)
                    replay.className = "fa fa-check-square-o";
                else {
                    replay.className = "fa fa-square-o";
                    replay.classList.toggle('fa-check-square-o');
                }
                replay.id=key+"replay";
                replay.addEventListener('click', (event) =>this.UpdateReplay(event), false);
                elem2.appendChild(replay);

                flipCardFront.appendChild(pr);
                flipCardBack.appendChild(ps);
                flipCardBack.appendChild(ll);
                var brl = document.createElement("br");
                flipCardBack.appendChild(brl);
                flipCardBack.appendChild(elem);
                flipCardBack.appendChild(elem1);
                flipCardBack.appendChild(elem2);
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

    UpdateFavorite= async(event)=>{
        var heart = document.getElementById(event.target.id);
        heart.classList.toggle('fa-heart-o');
        const body={id:event.target.id}
        const response = await axiosInstance.post(`/user/${this.getUserId()}/UpdateFavorite`,{body});
    };

    UpdateSending= async(event)=>{
        //TODO:to add the perfix fot the it attribute
        var send = document.getElementById(event.target.id);
        // console.log(event.target.id.substring(0,event.target.id.length-4));
        send.classList.toggle('fa-paper-plane-o');
        const body={id:event.target.id.substring(0, event.target.id.length-4)};
        const response = await axiosInstance.post(`/user/${this.getUserId()}/UpdateSending`,{body});
    };

    UpdateReplay= async(event)=>{
        //TODO:to add the perfix fot the it attribute
        var send = document.getElementById(event.target.id);
        // console.log(event.target.id.substring(0,event.target.id.length-6));
        send.classList.toggle('fa-square-o');
        const body={id:event.target.id.substring(0, event.target.id.length-6)};
        const response = await axiosInstance.post(`/user/${this.getUserId()}/UpdateReply`,{body});
    };

    render() {
        return (
            <div className="filter">
                <h2>Filter by:</h2>
                <div className="myBtnContainer">
                    <button className="btn_active" onClick={(event) =>this.filterSelection(0)}> Show all</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(1)}> FullJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(2)}> HalfJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(3)}> StudentJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(4)}> SendingJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(5)}> FavoriteJob</button>
                    <button className="btn_nothing" onClick={(event) =>this.filterSelection(6)}> ReplyJob</button>
                </div>
            </div>
        );
    }


}export default Filters
