import React, {
    Component
} from "react";
import "./DetailsForm.css"
import ValidatedInput from "../ValidatedInput";
import Utils from "../../utils/Utils";
import axiosInstance from "../../utils/axios";
import Select from "react-select";

//
const tagOptions = [
    {value: 'React', label: 'React'},
    {value: 'Redux', label: 'Redux'},
    {value: 'JavaScript', label: 'JavaScript'},
    {value: 'Angular', label: 'Angular'},
    {value: 'CSS', label: 'CSS'},
    {value: 'C++', label: 'C++'},
    {value: 'HTML', label: 'HTML'}
];

class DetailsForm extends Component {

    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
            first_name:"",
            last_name: "",
            password: "",
            confirmPassword: "",
            email:"",
            selectedTags: [],
            formValid: true
        };
    };


    componentWillMount = async () => {
        const response = await axiosInstance.get(`/user/${this.props.match.params.id}/changeProfile`);
        // console.log(response.data[0]);
        this.setState({first_name:response.data[0]});
        this.setState({last_name:response.data[1]});
        this.setState({password:response.data[5]});
        this.setState({confirmPassword:response.data[5]});
        this.setState({email:response.data[2]});
        // console.log("response.data[3]",response.data[0],response.data[1],
        //     response.data[2],response.data[3],response.data[4]);
        this.setState({selectedTags:response.data[4]});
        // console.log("selectedTags:",this.state.selectedTags,"response.data[3]",response.data[3])
        // console.log("lenght",this.state.selectedTags.length)
    }

    getUserId = () => this.props.match.params.id;

    onInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    onTagsChanged = (selectedTags) => {
        this.setState({selectedTags});
    };

    isValid = () => {
            const { password, confirmPassword, first_name, last_name } = this.state;
            // return Utils.validateEmail(email)
            //     &&
            return password.length >= 5
            && password === confirmPassword
            // && selectedTags.length >= 2
            && first_name
            && last_name;
    };

    DFapllybtnOnClick = async (event) => {
        if (!this.isValid()) {
            this.setState({ formValid: false });
            return;
        }
        const { state } = this;
        const body = {
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email,
            password: state.password,
            tags: state.selectedTags.map(t => t.value)
        };

        //####SERVER PART####
        try {
            // console.log("Details Form:  " + `/user/${this.props.match.params.id}/changeProfile`);
            const response = await axiosInstance.post(`/user/${this.getUserId()}/changeProfile`,{ body });
            // console.log(response);
            const { data } = response;
            if (data.success) {
                localStorage.setItem('token', data.token);

            }
        } catch (e) {
            console.log(e)
        }
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    DFcancelbtnOnClick=(e)=> {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }


    render() {
        // console.log("aaaaaa",this.state.selectedTags)
        const { first_name,last_name, password, confirmPassword,email,selectedTags, formValid } = this.state;
        return (
        <div>
                <form className="DFmodal-content" action="/action_page.php">
                    <div className="DFcontainer">
                        <h1>Profile Details:</h1>
                        <hr className="DFhr"/>

                        <label className="DFlable" htmlFor="first-name"><b>first Name</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="first_name" value={first_name} placeholder="First name" valid={formValid} />
                        <br/>

                        <label className="DFlable" htmlFor="last-name"><b>Last Name</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="last_name" value={last_name} placeholder="Last name" valid={formValid} />

                        {/*<br/>*/}
                        {/*<label className="DFlable" htmlFor="email"><b>Email</b></label>*/}
                        {/*<ValidatedInput onInputChange={this.onInputChange} name="email" value={email} placeholder="Email" valid={formValid || Utils.validateEmail(email)} />*/}

                        <br/>
                        <label className="DFlable" htmlFor="psw"><b>Password</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="password" value={password} type="password" placeholder="Password" valid={formValid} />

                        <br/>
                        <label className="DFlable" htmlFor="psw-repeat"><b>Confirm Password</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="confirmPassword" value={confirmPassword} type="password" placeholder="Re-enter password" valid={formValid} />
                        <br/>

                        {/*<div className="DFtags-selections">*/}
                            <label className="DFlable" htmlFor="intrs"><b>Interests</b></label>
                            <Select className="DFtags-selections"
                                isMulti={true}
                                value={selectedTags}
                                onChange={this.onTagsChanged}
                                options={tagOptions}
                            />
                        {/*</div>*/}

                        {/*<label>*/}
                        {/*    <input type="checkbox" checked="checked" name="remember"*/}
                        {/*           style="margin-bottom:15px"/> Remember me*/}
                        {/*</label>*/}

                        <div className="DFclearfix">
                            <button type="button"
                                    onClick={(e)=>this.DFcancelbtnOnClick(e)}
                                    className="DFcancelbtn">Cancel
                            </button>
                            <button type="button"
                                    onClick={this.DFapllybtnOnClick}
                                    className="DFsignupbtn">Apply
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }

}
export default DetailsForm;