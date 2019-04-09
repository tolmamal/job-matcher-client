import React, { Component } from 'react';
import './SignIn.css';
import axiosInstance from '../../utils/axios';
import Utils from "../../utils/Utils";
import ValidatedInput from "../ValidatedInput";
import jwt_decode from 'jwt-decode';

import UserPage from '../../components/UserPage/UserPage';




class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            formValid: true

        };


    }

    onInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    isValid = () => {
        const { email, password } = this.state;
        return Utils.validateEmail(email)
            && password.length >= 5

    };

    // submitForm = async () => {
    //     if (!this.isValid()) {
    //         this.setState({ formValid: false });
    //         return;
    //     }
    //     const { state } = this;
    //     const body = {
    //         email: state.email,
    //         password: state.password
    //
    //     };
    //
    //     try {
    //
    //     }
    //     catch (e) {
    //         console.log(e);
    //
    //     }
    //
    //
    //
    //
    // };



    submitHandler = async () => {
        if(!this.isValid()){
            this.setState({formValid: false});
            return;
        }
        const { email, password } = this.state;
        try {
            const response = await axiosInstance.post('/auth', { email, password });
            const { data: { token } } = response;
            localStorage.setItem('token', token);
            this.setState({ error: null, formValid: true });
            const user = jwt_decode(token).user;
            this.props.history.push(`/user/${user.id}`);
        } catch (e) {
            this.setState({ error: 'Invalid Email/Password' });
        }


        // const data = jwt_decode(token);
        // const userId = data.user.id;
        // just an experiment on using PUT endpoint with user id in the url
        // const test = await axiosInstance.put(`/user/${userId}/update`, {});
    };



    render() {
        const { email, password, formValid, error } = this.state;
        return (

            <div id="signin-form" className="container">
                <div className="container">
                    <h2>Sign In</h2>
                    <hr style={{ width: '40%' }} />
                    {
                        error &&
                        <label style={{ color: 'red' }}>{error}</label>
                    }
                    <div className="user-fields">
                        <ValidatedInput onInputChange={this.onInputChange} name="email" value={email} placeholder="Email" valid={formValid || Utils.validateEmail(email)} />
                        <ValidatedInput onInputChange={this.onInputChange} name="password" value={password} type="password" placeholder="Password" valid={formValid} />
                    </div>
                    <button className="Button" onClick={this.submitHandler}>Sign In</button>
                </div>
            </div>

        );
    }
}

export default SignIn;