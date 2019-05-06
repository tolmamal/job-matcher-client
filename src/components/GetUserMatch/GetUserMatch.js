import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";
import "../Jobs/Jobs.css";
import "../word2vec/word2vec";
import "./flipCard.css"
import  Filters from "./Filters"

class GetUserMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h3>finding your matches ...</h3>
                <br/>
                <Filters{...this.props}/>
                <br/>
                <div id="aaa"/>
            </div>
        );
    }
}
export default GetUserMatch;