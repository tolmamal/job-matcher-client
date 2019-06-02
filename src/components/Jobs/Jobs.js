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

    componentWillMount = async () => {
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
            <div className="All-jobs">
            <br/>
                <h2>All the jobs we offer:</h2>
                {jobsList.map(job => {
                    return (
                        <div className="jobCard" key={job.identifier}>
                            <div className="jobContent">
                                <span className="jobName">Role: {job.role_name}</span>
                                <p>Location: {job.location} <br/>
                                Type: {job.type}   Salary: {job.salary} <br/>
                                Description: {job.description} <br/>
                                Requirements: {job.requirements}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Jobs