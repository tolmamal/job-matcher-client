import React, {Component} from 'react';
import "./Wrapping.css";





//TODO: change to images to relative path
class Wrapping extends Component {
    render() {
        return(
            <section id="slider">
                <div className="main-slider">
                    <div className="single-slide">
                        <img src="https://i.imgur.com/dozgf4n.jpg" alt="img"/>
                        <div className="slide-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="slide-article">
                                            <h1 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">Job Matcher</h1>
                                            <p className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.75s">Looking for job? you have got to the right place. Explore your skills and find the perfect job for you.</p>
                                            <a className="read-more-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="slider-img wow fadeInUp">
                                            <img src="https://i.imgur.com/oXoGKMh.png" alt="business man"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <img src="https://i.imgur.com/acHGQhu.jpg" alt="img"/>
                        <div className="slide-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="slide-article">
                                            <h1 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">We are Best Team & Support you always</h1>
                                            <p className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.75s">Some text for more information...</p>
                                            <a className="read-more-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" href="#" >Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="slider-img wow fadeInUp">
                                            <img src="https://i.imgur.com/76qpiqw.png" alt="business man"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Wrapping;