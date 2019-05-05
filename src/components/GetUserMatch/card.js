import React, {Component} from 'react';
import "./card.css"


class Card extends Component{

    render() {
        return (
            <div className="card">
                {/*<img className="img" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />*/}
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p>https://www.jobmaster.co.il/jobs/?headcatnum=15&lang=en</p>
                    <p>80%</p>
                </div>
            </div>
        );
    }


}export default Card
