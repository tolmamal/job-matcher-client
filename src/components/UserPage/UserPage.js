import React, { Component } from 'react';
import './UserPage.css';
import UserMenu from '../UserMenu/UserMenu';


class UserPage extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(`calling /api/user/${id}`);
    }

    render () {
        return(
            <div>
                <UserMenu/>
                <br></br>
                <br></br>
                
                <p>Hello User!</p>

                
            </div>

        );
    }
}



export default UserPage;