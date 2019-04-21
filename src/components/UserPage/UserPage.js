import React, {Component} from 'react';
import './UserPage.css';
import UserMenu from '../UserMenu/UserMenu';
import axiosInstance from '../../utils/axios';

class UserPage extends Component {

<<<<<<< HEAD
=======


>>>>>>> 092f9b75d7fb9ee7a3636cffcbc3ad3819e0dc99
    componentDidMount() {
        console.log(`calling /api/user/${this.getUserId()}`);
    }

    getUserId = () => this.props.match.params.id;

    render() {

        return (
            <div>
                <UserMenu {...this.props}/>
<<<<<<< HEAD
                {console.log(this.props)}
                <br></br>
=======
>>>>>>> 092f9b75d7fb9ee7a3636cffcbc3ad3819e0dc99
                <br></br>
                <br></br>
                <br></br>


            </div>
        );
    }
}


export default UserPage;