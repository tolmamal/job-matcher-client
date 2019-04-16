import React, {Component} from 'react';
import "./GetUserMatch.css";
import axiosInstance from "../../utils/axios";


class GetUserMatch extends Component {


    getUserId = () => this.props.match.params.id;

    //const response = await axiosInstance.post(`/user/${this.getUserId()}/preferences`,{body});

    findMatchHandler = async () => {
        // do not forget - add try&catch later
        const response = await axiosInstance.post(`/user/${this.getUserId()}/svemtchjbs`);

    };


    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h3>find match for user</h3>
                <br/>
                <br/>
                <br/>
                <button id="find-match-button" onClick={this.findMatchHandler}>Find Match!</button>
            </div>
        );
    }


}


export default GetUserMatch;