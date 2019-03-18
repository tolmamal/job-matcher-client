import React, { Component } from 'react';
import "./RegisterForm.css";
import Select from "react-select";
import Utils from "../../utils/Utils";
import ValidatedInput from "../ValidatedInput";
import axiosInstance from '../../utils/axios';

const tagOptions = [
    { value: 'React', label: 'React' },
    { value: 'Redux', label: 'Redux' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Angular', label: 'Angular' },
    { value: 'CSS', label: 'CSS' },
    { value: 'C++', label: 'C++' },
    { value: 'HTML', label: 'HTML' }
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
            formValid: true
        };
    }

    onInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    onTagsChanged = (selectedTags) => {
        this.setState({ selectedTags });
    };

    isValid = () => {
        const { email, password, confirmPassword, selectedTags, first_name, last_name } = this.state;
        return Utils.validateEmail(email)
            && password.length >= 5
            && password === confirmPassword
            && selectedTags.length >= 2
            && first_name
            && last_name;
    };

    submitForm = async () => {
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

        try {
            const response = await axiosInstance.post('/users/register', { body });
            const { data } = response;
            if (data.success) {
                localStorage.setItem('token', data.token);
            }
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const { email, password, confirmPassword, selectedTags, formValid } = this.state;

        return (
            <div id="register-form" className="container">
                {/* <h3>יצירת משתמש חדש</h3> */}
                <h3>Create account</h3>
                <br></br>
                <br></br>
                <br></br>
                <div className="user-fields">
                    <ValidatedInput onInputChange={this.onInputChange} name="first_name" value={email} placeholder="First name" valid={formValid} />
                    <ValidatedInput onInputChange={this.onInputChange} name="last_name" value={email} placeholder="Last name" valid={formValid} />
                    <ValidatedInput onInputChange={this.onInputChange} name="email" value={email} placeholder="Email" valid={formValid || Utils.validateEmail(email)} />
                    <ValidatedInput onInputChange={this.onInputChange} name="password" value={password} type="password" placeholder="Password" valid={formValid} />
                    <ValidatedInput onInputChange={this.onInputChange} name="confirmPassword" value={confirmPassword} type="password" placeholder="Re-enter password" valid={formValid} />
                </div>
                <div className="tags-selections">
                    <br></br>
                    <h4>Interests</h4>
                    <Select
                        isMulti={true}
                        value={selectedTags}
                        onChange={this.onTagsChanged}
                        options={tagOptions}
                    />
                </div>
                <br></br>
                <button onClick={this.submitForm}>Create your account</button>
            </div>
        );
    }
}

export default RegisterForm;

