import React, {Component} from 'react';
import "./Preferences.css";
import Select from "react-select";
import axiosInstance from '../../utils/axios';


const typeOptions = [
    {value: 'partTime', label: 'part-time job'},
    {value: 'fullTime', label: 'full-time job'},
    {value: 'none', label: 'none'}
];




class Preferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: []
        };
    }

    componentWillMount = async () => {
        const response = await axiosInstance.get(`/user/${this.getUserId()}/preferences`);
        // console.log("response.data[0]",response.data);
        var temp=[];
        for (var i =0;i<response.data.length;i++)
            temp[i] = { value: response.data[i], label: response.data[i] };
        // console.log("temp",temp);
        this.setState({selectedType:temp});
    };

    getUserId = () => this.props.match.params.id;

    onTypeChanged = (selectedType) => {
        this.setState({selectedType});

    };

    editHandler = async () => {
        //console.log("editHandler");
        const {state} = this;

        const body = {
            type: state.selectedType.value

        };

        try {

            const response = await axiosInstance.post(`/user/${this.getUserId()}/preferences`,{body});

        }

        catch (e) {
            console.log(e);

        }


    };

    render() {
        const {selectedType,success} = this.state;
        return (
            <div>
                <h2>Edit your professional preferences</h2>
                <br></br>
                <br></br>
                <br></br>
                <div className="type-options">
                    <h4>Job-Type:</h4>
                    <Select
                        isMulti={false}
                        value={selectedType}
                        onChange={this.onTypeChanged}
                        options={typeOptions}

                    />

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={this.editHandler}>Edit preferences</button>


            </div>
        );
    }

}


export default Preferences;