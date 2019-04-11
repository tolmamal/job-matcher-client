import React, {
    Component
} from "react";
import "./StateStatus.css"

class StateStatus extends Component {

    sstate=1;


    render() {
        return (
            <div>
                <h2>Set your finder status:</h2>
                <label className="SScontainer">not found jod yet
                    <input type="radio" checked="checked" name="radio"/>
                        <span className="SScheckmark"></span>
                </label>
                <label className="SScontainer">found job
                    <input type="radio" name="radio"/>
                        <span className="SScheckmark"></span>
                </label>
            </div>

        );

    }
}

export default StateStatus;
