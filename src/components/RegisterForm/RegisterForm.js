import React, {Component} from 'react';
import "./RegisterForm.css";
import Select from "react-select";
import Utils from "../../utils/Utils";
import ValidatedInput from "../ValidatedInput";
import axiosInstance from '../../utils/axios';
import Confetti from 'react-confetti';

const tagOptions = [
    {value: 'Front-end', label: 'Front-end'},
    {value: 'Back-end', label: 'Back-end'},
    {value: 'DB', label: 'DB'},
    {value: 'Full-stack', label: 'Full-stack'},
    {value: 'Cyber', label: 'Cyber'},
    {value: 'Mobile', label: 'Mobile'},
    {value: 'QA', label: 'QA'},
    {value: 'Devops', label: 'Devops'},
    {value: 'Machine-learning', label: 'Machine-learning'},
    {value: 'Big data', label: 'Big data'},
    {value: 'Game Development', label: 'Game Development'},
    {value: 'Hardware', label: 'Hardware'},
    {value: 'Network', label: 'Network'},
    {value: 'Cloud', label: 'Cloud'},
    {value: 'Algorithms', label: 'Algorithms'},
    {value: 'Data Science', label: 'Data Science'},
    {value: 'Embedded', label: 'Embedded'},
    {value: 'Artificial Intelligence', label: 'Artificial Intelligence'}


];

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            first_name: "",
            last_name: "",
            selectedTags: [],
            formValid: true,
            success: false
        };
    }

    onInputChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    };

    onTagsChanged = (selectedTags) => {
        this.setState({selectedTags});
    };

    isValid = () => {
        const {email, password, confirmPassword, selectedTags, first_name, last_name} = this.state;
        return Utils.validateEmail(email)
            && password.length >= 5
            && password === confirmPassword
            && selectedTags.length >= 2
            && first_name
            && last_name;
    };

    submitForm = async () => {
        if (!this.isValid()) {
            this.setState({formValid: false});
            return;
        }
        const {state} = this;
        const body = {
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email,
            password: state.password,
            tags: state.selectedTags.map(t => t.value)
        };

        try {
            const response = await axiosInstance.post('/users/register', {body});
            const {data} = response;
            if (data.success) {
                localStorage.setItem('token', data.token);
                this.setState({success: true});
            }
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const { first_name,last_name, email, password, confirmPassword, selectedTags, formValid, success } = this.state;

        return (
            <div id="register-form" className="container">
                <div className="register-container">
                <Confetti
                    run={success}
                    width={window.innerWidth}
                    height={window.innerHeight}
                />

                <h3>Create account</h3>
                <br/>

                <div className="user-fields">
                    <ValidatedInput onInputChange={this.onInputChange} name="first_name" value={first_name}
                                    placeholder="First name" valid={formValid}/>
                    <ValidatedInput onInputChange={this.onInputChange} name="last_name" value={last_name}
                                    placeholder="Last name" valid={formValid}/>
                    <ValidatedInput onInputChange={this.onInputChange} name="email" value={email} placeholder="Email"
                                    valid={formValid || Utils.validateEmail(email)}/>
                    <ValidatedInput onInputChange={this.onInputChange} name="password" value={password} type="password"
                                    placeholder="Password" valid={formValid}/>
                    <ValidatedInput onInputChange={this.onInputChange} name="confirmPassword" value={confirmPassword}
                                    type="password" placeholder="Re-enter password" valid={formValid}/>
                </div>
                <div className="tags-selections">
                    <br></br>
                    <h4>Fields</h4>
                    <Select
                        isMulti={true}
                        value={selectedTags}
                        onChange={this.onTagsChanged}
                        options={tagOptions}
                    />
                </div>
                <br></br>
                <button className="regBtn" onClick={this.submitForm}>Create your account</button>
                </div>
            </div>
        );
    }
}

export default RegisterForm;

