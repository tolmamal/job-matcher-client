import React, {Component} from 'react';
import './UserPage.css';
import UserMenu from '../UserMenu/UserMenu';
import axiosInstance from '../../utils/axios';

class UserPage extends Component {



    // componentDidMount() {
    //     console.log(`calling /api/user/${this.getUserId()}`);
    // }

    getUserId = () => this.props.match.params.id;

    render() {

        return (
            <div>
                <UserMenu {...this.props}/>
                <br></br>
                <br></br>
                <br></br>


            </div>
        );
    }
}


export default UserPage;