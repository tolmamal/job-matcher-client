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
                <br/>
                <br/>
                <h3>finding your matches ...</h3>
                <br/>
                <Filters{...this.props}/>
                <br/>
                <Sort {...this.props}/>
                {/*<button id="find-match-button" onClick={this.findMatchHandler}>Find Match!</button>*/}
                <br/>
                {/*<div id="aaa"></div>*/}
                {/*<button id="find-match-button" onClick={this.filterLocationHandler}>Find Match By LOCATION Order!</button>*/}
                {/*<button id="find-match-button" onClick={this.filterScoreHandler}>Find Match By SCORE Order!</button>*/}
                <button id="find-match-button" onClick={this.findJobHandler}>Find Match word2vec!</button>
                <div id="aaa"/>
            </div>
        );
    }
}
export default GetUserMatch;