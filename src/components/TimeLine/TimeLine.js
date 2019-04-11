import React, {
    Component
} from "react";
import "./TimeLine.css"

class TimeLine extends Component {

    datess=["1/1/19","1/2/19","1/3/19","1/4/19"];
    matchJobs=["a","b","c","d"];
    submitedJobs=["a","c"];
    responsivedJobs=["a","c"];

    loadTimeLine=(e)=>{
        var lines = document.getElementsByClassName("timeline")[0];


        for (var i = 0; i < this.datess.length; i++) {

            var box = document.createElement("div");
            if(i%2===0)
                box.className="TLcontainer left";
            else
                box.className="TLcontainer right";

            var inbox=document.createElement("div");
            inbox.className="TLcontent";

            var lineDate=document.createElement("h3");
            var node = document.createTextNode(this.datess[i]);
            lineDate.appendChild(node);
            inbox.appendChild(lineDate);

            var lineMatchJobs=document.createElement("p");
            lineMatchJobs.className="TLp";
            node = document.createTextNode("Match Jobs: "+this.matchJobs);
            lineMatchJobs.appendChild(node);
            inbox.appendChild(lineMatchJobs);

            var lineSubmitedJobs=document.createElement("p");
            lineSubmitedJobs.className="TLp";
            node = document.createTextNode("Submited Jos: "+this.submitedJobs);
            lineSubmitedJobs.appendChild(node);
            inbox.appendChild(lineSubmitedJobs);

            var lineResponsivedJobs=document.createElement("p");
            lineResponsivedJobs.className="TLp";
            node = document.createTextNode("Responsived Jobs: "+this.responsivedJobs);
            lineResponsivedJobs.appendChild(node);
            inbox.appendChild(lineResponsivedJobs);

            box.appendChild(inbox);
            lines.appendChild(box);
        }
        var btn=document.getElementById("showTL");
        btn.disabled="disabled";
        var footer=document.getElementsByClassName("Ffooter");
        footer[0].className="FFfooter";
    };

    render() {
        return (
            <div >
                <h2>follow after your proggration:
                    <button className="TLbtn" id="showTL" onClick={(e)=>this.loadTimeLine(e)}>
                        show:</button>
                </h2>

                <div className="TLbody">
                    <div id="div1" className="timeline">
                    {/*    <div className="TLcontainer left">*/}
                    {/*        <div className="TLcontent">*/}
                    {/*            <h2>2017</h2>*/}
                    {/*            <p>a</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="TLcontainer right">*/}
                    {/*        <div className="TLcontent">*/}
                    {/*            <h2>2016</h2>*/}
                    {/*            <p>b</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="TLcontainer left">*/}
                    {/*        <div className="TLcontent">*/}
                    {/*            <h2>2015</h2>*/}
                    {/*            <p>c</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="TLcontainer right">*/}
                    {/*        <div className="TLcontent">*/}
                    {/*            <h2>2012</h2>*/}
                    {/*            <p>d</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="TLcontainer left">*/}
                    {/*        <div className="TLcontent">*/}
                    {/*            <h2>2011</h2>*/}
                    {/*            <p>e</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="TLcontainer right">*/}
                    {/*        <div className="TLcontent">*/}
                    {/*            <h2>2007</h2>*/}
                    {/*            <p>f</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    </div>
                    {/*<img src="jdejlo" className="TLImg" onLoad={(e)=>this.loadTimeLine(e)}/>*/}
                </div>
            </div>
        );
    }
}

export default TimeLine;
