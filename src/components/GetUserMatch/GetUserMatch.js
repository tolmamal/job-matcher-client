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
        this.state = {
            jobs: {},
        }
    }

    SendMail= async(e)=>{
        const body={
            urlFile:'http://localhost:3000/user/5cd81b8d4011b44f6c72ce3c#svemtchjbs',
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
                <br/>
                <br/>
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