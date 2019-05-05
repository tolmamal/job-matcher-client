import React, { Component } from "react";
import axiosInstance from "../../utils/axios";
import "./JobsCounter.css"


export default class JobsCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter:0
        };
    };

    componentWillMount= async () =>{
        const response = await axiosInstance.get(`/jobscounter`);
        // console.log("jobsCounter", response.data)
        this.setState({counter:response.data});
        //***************************************//

        const target = window.document.getElementsByTagName('h1')[0]

        const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
        // const colorLetter = letter => `<span style="color: hsl(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
        const flickerAndColorText = text =>
            text
                .split(' ')
                // .map(flickerLetter)
                // .map(colorLetter)
                .join('       ');
        const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


        neonGlory(target);
        target.onClick=({ target })=>  neonGlory(target);

    };


    render() {
        return (
            <div className="JobsCounter_div">
                <h1 className="JobsCounter_h1">The number of positions waiting for you on the site:</h1>
                <h1 className="JobsCounter_h1">{this.state.counter}</h1>
            </div>
        );
    }
}


