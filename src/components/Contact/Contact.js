import React, {Component} from 'react';
import './Contact.css';
import axiosInstance from "../../utils/axios";


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user_name: "",
          user_mail: "",
          user_msg: ""
        };
    }




    sendHandler = async () => {

        const {user_name, user_mail, user_msg} = this.state;


        try {
            const response = await axiosInstance.post('/users/contact', {user_name, user_mail, user_msg});

        }
        catch (e) {
            console.log(e);
        }

    };



    inputChange = ({target: {name, value}}) => {
        this.setState({[name]: value});

    };

    render() {
        const {user_name, user_mail, user_msg} = this.state;

        return(
            <div className="contact">
                <div className="contact-form">
                    <h2>CONTACT US</h2>

                    <p type="Name:">
                        <input onInput={this.inputChange} name="user_name" value={user_name} placeholder="Your name">
                        </input></p>
                    <p type="Email:">
                        <input onInput={this.inputChange} name="user_mail" value={user_mail} placeholder="Let us know how to contact you back">
                        </input></p>
                    <p type="Message:">
                        <input onInput={this.inputChange} name="user_msg" value={user_msg} placeholder="What would you like to tell us?">
                        </input></p>


                    <button onClick={this.sendHandler}>Send Message</button>

                    <div className="info">
                        <span class="fa fa-envelope-o"></span> jobmatcher100@gmail.com
                    </div>

                </div>

            </div>

        );
    }


}


export default Contact;