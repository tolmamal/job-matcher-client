import React, {Component} from 'react';
import './Contact.css';


class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <form className="contact-form">
                    <h2>CONTACT US</h2>
                    <p type="Name:"><input placeholder="Your name"></input></p>
                    <p type="Email:"><input placeholder="Let us know how to contact you back"></input></p>
                    <p type="Message:"><input placeholder="What would you like to tell us?"></input></p>
                    <button>Send Message</button>

                    <div className="info">
                        <span class="fa fa-envelope-o"></span> jobmatcher100@gmail.com
                    </div>

                </form>

            </div>

        );
    }


}


export default Contact;