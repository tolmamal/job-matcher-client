import React, {
    Component
} from "react";
import "./StateStatus.css"
import axiosInstance from "../../utils/axios";

class StateStatus extends Component {


    constructor(props) {
        super(props);
        this.state = {
            find:false
        };

    };

    componentWillMount = async () => {
        try {
            const response = await axiosInstance.get(`/user/${this.props.match.params.id}/set_status`);
            this.setState({find:response.data[0]});
            var modal1 = document.getElementById("find1");
            var modal2= document.getElementById("find2");
            if(this.state.find==false)
                modal1.checked="checked";
            else
                modal2.checked="checked";
        }
        catch (e) {
            this.setState({error: 'Cannot read the data'});
        }

    };


        render() {
        return (
            <div>
                <h2>Set your finder status:</h2>
                <label className="SScontainer">not found jod yet
                    <input id="find1" checked="checked" type="radio" name="radio"/>
                        <span className="SScheckmark"></span>
                </label>
                <label className="SScontainer">found job
                    <input id="find2" checked="checked" type="radio" name="radio"/>
                        <span className="SScheckmark"></span>
                </label>
            </div>

        );

    }
}

export default StateStatus;
