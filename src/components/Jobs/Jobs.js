import React, {Component} from 'react'
import axios from 'axios'

import axiosInstance from '../../utils/axios';
import "./Jobs.css"


class Jobs extends Component {
    constructor(props){
        super(props)
    }

    

    componentDidMount= async () => {
        const response = await axiosInstance.get('/jobs/upload')
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err)
        })
        
    };


    render() {
        return <div>

        </div>
    }
}
       
export default Jobs

/*
constructor(props){
        super(props)
        this.state = {
            Job: {
                id: "",
                role_name: "",
                location: "",
                type: "",
                salary: "",
                description: "",
                requirements: ""
            }
        }
    }

                    return (
                    <div>
                    <button className="Button" onClick={this.buttonHandler}>Jobs</button>
                    </div>


    buttonHandler = async () => {
        const response = await axiosInstance.get('/jobs/upload')
        .then(response => {
            console.log(response.data);
        this.setState({
            jobs: response.data
            })
        })
        
    };
*/