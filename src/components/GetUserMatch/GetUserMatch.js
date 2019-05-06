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

    render() {
        return (
            <div>
                <br/>
                <Filters{...this.props}/>
                <br/>
                <Sort {...this.props}/>
                <div id="aaa"/>
            </div>
        );
    }
}
export default GetUserMatch;