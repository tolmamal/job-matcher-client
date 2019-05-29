import React, {Component} from 'react'
import axiosInstance from '../../utils/axios';
import "./Jobs.css"


class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //buttonOnclick: false,
            jobsList: []
        };
    }

    // identifier: "",
    // role_name: "",
    // location: "",
    // type: "",
    // salary: "",
    // description: "",
    // requirements: ""

    componentDidMount = async () => {
        try {
            const response = await axiosInstance.get('/jobs/upload')
                .then(response => {
                    //console.log(response.data)
                    this.setState({
                        jobsList: response.data,
                        //buttonOnclick: true
                    })

                    //this.setState({ error: null, response });
                    return response;
                })
            //this.setState({ error: null, formValid: true });
        } catch (e) {
            this.setState({error: 'Cannot read the data'});
        }
    };

    render() {
        const {jobsList} = this.state;
        return (
            <div>
            <br/>
                All Jobs offers:
                {jobsList.map(job => {
                    return (
                        <div className="jobCard" key={job.identifier}>
                            <div className="jobContent">
                                <span className="jobName">Role: {job.role_name}</span>
                                <p>Location: {job.location} </p>
                                <p>Type: {job.type}</p>
                                <p>Salary: {job.salary}</p>
                                <p>Description: {job.description}</p>
                                <p>Requirements: {job.requirements}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Jobs