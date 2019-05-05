import React, {Component} from 'react';
import "./flipCard.css"


class FlipCard extends Component {

    constructor(props) {
        super(props);
        // console.log('props')
        // console.log(props)
        console.log('state')
        console.log(props)
    }
    render  () {
        return(
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {/*<img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">*/}
                        <p>Job Role</p>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        )
    }
} export default FlipCard