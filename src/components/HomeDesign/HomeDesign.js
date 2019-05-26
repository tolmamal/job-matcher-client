import React, {Component} from 'react';
import './HomeDesign.css';
import axiosInstance from "../../utils/axios";



class HomeDesign extends Component {


    componentWillMount = async (event)=> {
        const jobscounter = await axiosInstance.get(`/jobscounter`);
        // console.log("response.data=",jobscounter.data);
        var jobOffer=document.getElementById("jobsOffers");
        let txt = document.createTextNode(jobscounter.data.toString());
        jobOffer.appendChild(txt);

        const registersusercounter = await axiosInstance.get(`/registersusercounter`);
        var registersusers=document.getElementById("registersusers");
        txt = document.createTextNode(registersusercounter.data.toString());
        registersusers.appendChild(txt);

        const usersfindjobcounter = await axiosInstance.get(`/usersfindjobcounter`);
        var usersfindjob=document.getElementById("usersfindjob");
        txt = document.createTextNode(usersfindjobcounter.data.toString());
        usersfindjob.appendChild(txt);

    }

    render() {
        return (
            <div>
                <section id="home-design">
                    <img className="background-img" src="https://i.imgur.com/CDS3Nyh.jpg"/>
                    <div className="front">
                        <h1 className="web-title">Job Matcher</h1>
                        <p className="description">Explore your abilities. <br/>
                            Explore your skills. <br/>
                            Find out what you like. <br/>
                            Be ready to discover a new world of custom employment offers.
                        </p>


                    </div>

                </section>

                <section id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-area">
                                    <h2 className="title">Our Services</h2>
                                    <span className="line"></span>
                                    <p>We offer a whole new world of employment opportunities in the form of a management and follow-up platform for submitting resumes to various positions. <br/>
                                        We provide a wide and bounded repository of jobs across the web in the software world. Based on your resume, we provide personalized employment offers to the client.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="service-content">
                                    <div className="row">
                                        {/*start single service*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="single-service wow zoomIn">
                                                <i className="fa fa-database service-icon"></i>
                                                <h4 className="service-title">Wide Data Bank</h4>
                                                <p>A wide and varied of employment offers in software field</p>
                                            </div>
                                        </div>
                                        {/*end single service*/}

                                        {/*start single service*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="single-service wow zoomIn">
                                                <i className="fa fa-user-circle service-icon"></i>
                                                <h4 className="service-title">Personal Timeline Career</h4>
                                                <p>Tracking and managing a customized career timeline for each client<br/>
                                                based on previous experience in customer's professional field.</p>
                                            </div>
                                        </div>
                                        {/*end single service*/}

                                        {/*start single service*/}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="single-service wow zoomIn">
                                                <i className="fa fa-commenting service-icon"></i>
                                                <h4 className="service-title">Customized Professional Recommends System</h4>
                                                <p>Based on the client's resume and professional field, <br/>
                                                    we also offer professional recommendations for studies <br/>
                                                    in the field.
                                                </p>
                                            </div>
                                        </div>
                                        {/*end single service*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="counter">
                    {/*<div className="counter-overlay">*/}
                        <div className="container" >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="counter-area">
                                        <div className="row">

                                            {/*start single counter*/}
                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-counter">
                                                    <div className="counter-icon">
                                                        <i className="fa fa-suitcase"></i>
                                                    </div>
                                                    <div id="jobsOffers" className="counter-no counter">
                                                        {/*1275*/}
                                                    </div>
                                                    <div className="counter-label">
                                                        Job Offers
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of single counter*/}

                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-counter">
                                                    <div className="counter-icon">
                                                        <i className="fa fa-clock-o"></i>
                                                    </div>
                                                    <div id="registersusers" className="counter-no counter">
                                                        {/*400*/}
                                                    </div>
                                                    <div className="counter-label">
                                                        Registered Users
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 col-sm-6">
                                                <div className="single-counter">
                                                    <div className="counter-icon">
                                                        <i className="fa fa-trophy"></i>
                                                    </div>
                                                    <div  id="usersfindjob" className="counter-no counter">
                                                        {/*350*/}
                                                    </div>
                                                    <div className="counter-label">
                                                        Users Find Job
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*</div>*/}

                </section>



            </div>





        );
    }
}



export default HomeDesign;