import React, {Component} from 'react';
import {getToken} from "../../utils/axios";
import {Redirect} from "react-router-dom";


export default function (ComposedClass) {
    class IsAuthenticated extends Component {
        render() {
            const token = getToken();
            if (!token) {
                return <Redirect to={'/'}/>;
            }
            return <ComposedClass {...this.props} />;
        }
    }

    return IsAuthenticated;
}
