import React, {
    Component
} from "react";
import "./DetailsForm.css"
import ValidatedInput from "../ValidatedInput";
import Utils from "../../utils/Utils";
// import axiosInstance from "../../utils/axios";

class DetailsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "testUser100@gmail.com",
            password: "12345",
            confirmPassword: "12345",
            first_name: "Jone",
            last_name: "Deo",
            // selectedTags: [],
            formValid: true
        };
    };

    onInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    isValid = () => {
        const { email, password, confirmPassword, first_name, last_name } = this.state;
        return Utils.validateEmail(email)
            && password.length >= 5
            && password === confirmPassword
            // && selectedTags.length >= 2
            && first_name
            && last_name;
    };

    DFsignupbtnOnClick = async () => {
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
            // tags: state.selectedTags.map(t => t.value)
        };

        // try {
        //     const response = await axiosInstance.post('/users/register', { body });
        //     const { data } = response;
        //     if (data.success) {
        //         localStorage.setItem('token', data.token);
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    DFcancelbtnOnClick=(e)=> {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }


    render() {
        const { first_name,last_name, email, password, confirmPassword, formValid } = this.state;
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

                        <br/>
                        <label className="DFlable" htmlFor="email"><b>Email</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="email" value={email} placeholder="Email" valid={formValid || Utils.validateEmail(email)} />

                        <br/>
                        <label className="DFlable" htmlFor="psw"><b>Password</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="password" value={password} type="password" placeholder="Password" valid={formValid} />

                        <br/>
                        <label className="DFlable" htmlFor="psw-repeat"><b>Confirm Password</b></label>
                        <ValidatedInput onInputChange={this.onInputChange} name="confirmPassword" value={confirmPassword} type="password" placeholder="Re-enter password" valid={formValid} />


                        <label>
                            {/*<input type="checkbox" checked="checked" name="remember"*/}
                            {/*       style="margin-bottom:15px"/> Remember me*/}
                        </label>

                        <div className="DFclearfix">
                            <button type="button"
                                    onClick={(e)=>this.DFcancelbtnOnClick(e)}
                                    className="DFcancelbtn">Cancel
                            </button>
                            <button type="button"
                                    onClick={(e)=>this.DFsignupbtnOnClick(e)}
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