import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";
import "../Jobs/Jobs.css";
import "../word2vec/word2vec";
import Sort from "./Sort"
import "./flipCard.css"
import  Filters from "./Filters"

class GetUserMatch extends Component {

    constructor(props) {
        super(props);
    }

    SendMail= async(e)=>{
        const body={
            urlFile:'https://trello.com/b/YsAIby33/jobmatcher',
        }
        const id=this.props.match.params.id;
        const response = await axiosInstance.post(`/user/${id}/PDFfile`,{ body });
    };

    render() {
        return (
            <div>
                <br/>
                <Filters{...this.props}/>
                <br/>
                <Sort {...this.props}/>
                <div id="aaa"/>
                <br/>
                <br/>
                <br/>
                <button onClick={(e) => this.SendMail(e)}>send mail</button>
            </div>
        );
    }
}
export default GetUserMatch;