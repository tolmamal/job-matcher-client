import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";


class GetUserMatch extends Component {


    getUserId = () => this.props.match.params.id;

    findMatchHandler = async () => {
        // TODO: add try&catch later
        const response = await axiosInstance.post(`/user/${this.getUserId()}/svemtchjbs`);

    };


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
                <button id="find-match-button" onClick={this.findMatchHandler}>Find Location Match!</button>
            </div>
        );
    }


}


export default GetUserMatch;