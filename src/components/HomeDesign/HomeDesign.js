import React, {Component} from 'react';
import './HomeDesign.css';


class HomeDesign extends Component {
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

                <section id="feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-area">
                                    <h2 className="title">Features</h2>
                                    <span className="line"></span>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="feature-content">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <div className="single-feature wow zoomIn">
                                                <i className="fa fa-leaf feature-icon"></i>
                                                <h4 className="feat-title">Creative Design</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="single-feature wow zoomIn">
                                                <i className="fa fa-mobile feature-icon"></i>
                                                <h4 className="feat-title">Varied repository</h4>
                                                <p>There are many variations of jobs in software world. You just have to choose one.</p>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </section>


                <section id="counter">
                    <div className="counter-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="counter-area">
                                        <div className="row">
                                            {/*start single counter*/}
                                            <div className="col-md-3 col-sm-6">
                                                <div className="single-counter">
                                                    <div className="counter-icon">
                                                        <i className="fa fa-suitcase"></i>
                                                    </div>
                                                    <div className="counter-no counter">
                                                        1275
                                                    </div>
                                                    <div className="counter-label">
                                                        Job Offers
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of single counter*/}
                                            <div className="col-md-3 col-sm-6">
                                                <div className="single-counter">
                                                    <div className="counter-icon">
                                                        <i className="fa fa-clock-o"></i>
                                                    </div>
                                                    <div className="counter-no counter">
                                                        400
                                                    </div>
                                                    <div className="counter-label">
                                                        Registered Users
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-6">
                                                <div className="single-counter">
                                                    <div className="counter-icon">
                                                        <i className="fa fa-trophy"></i>
                                                    </div>
                                                    <div className="counter-no counter">
                                                        350
                                                    </div>
                                                    <div className="counter-label">
                                                        Awards
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>





        );
    }
}



export default HomeDesign;