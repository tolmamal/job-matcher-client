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
    };

    componentWillMount = async () => {
        try {
            const response = await axiosInstance.get(`/user/${this.getUserId()}/preferences`);
            // console.log("response.data[0]",response.data);
            var temp = [];
            for (var i = 0; i < response.data.length; i++)
                temp[i] = {value: response.data[i], label: response.data[i]};
            // console.log("temp",temp);
            this.setState({selectedType: temp});
            // for star icon
            this.ratestar();
            setInterval(this.ratestar(),3000,this.ratestar());
        }catch (e) {
            console.log("catch componentWillMount Preferences")
        }
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

    ratestar = () => {

        var a;
        a = document.getElementById("div1");
        a.innerHTML = "&#xf006;";
        setTimeout(function () {
            a.innerHTML = "&#xf123;";
        }, 1000);
        setTimeout(function () {
            a.innerHTML = "&#xf005;";
        }, 2000);
        var b;
        b = document.getElementById("div2");
        b.innerHTML = "&#xf006;";
        setTimeout(function () {
            b.innerHTML = "&#xf123;";
        }, 1000);
        setTimeout(function () {
            b.innerHTML = "&#xf005;";
        }, 2000);


    };

    render() {
        const {selectedType,success} = this.state;
        return (
            <div>
                <div className="main-file">
                    <div className="file-inst">
                        <br/><br/>
                        <h2>How does it work?</h2>
                        <br/>
                        <p>In order to get customized job's matches you need to choose your preference about the Job-Type. <br/>
                            If you do not have preference the default choice is a full-time job.<br/>
                        </p>
                        <br/>
                        <p> <i id="div1" className="fa" aria-hidden="true " />
                            Our recommendation: For better matching result choose your preference
                            <i id="div2" className="fa" aria-hidden="true " />
                            {/*<i className="fa fa-star-o" aria-hidden="true"/>*/}
                        </p>
                        {/*<h2>Edit your professional preferences</h2>*/}
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="type-options">
                            <h4>Please choose your preference:</h4>
                            <br/>
                            <Select
                                isMulti={false}
                                value={selectedType}
                                onChange={this.onTypeChanged}
                                options={typeOptions}

                            />
                        </div>
                    </div>
                </div>

                <button className="edit-preferences-btn" onClick={this.editHandler}>Select</button>


            </div>
        );
    }

}


export default Preferences;