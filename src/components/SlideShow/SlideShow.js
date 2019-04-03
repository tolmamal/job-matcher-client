import React, {
    Component
} from "react";
import "./SlideShow.css"



class SlideShow extends Component {


    slideIndex = 1;

    

showSlides=(n)=> {
        this.slideIndex=n;
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[this.slideIndex - 1].style.display = "block";
    };

    plusSlides=(n)=>{
        this.showSlides(this.slideIndex + n);
    };

    render() {
        return (
            <div onLoad={(e)=>this.showSlides(1)}>
                <div className="slideshow-container" >
                    <div className="mySlides fade" >
                        <p className="spani" >test1</p>
                         {/*empty img for the function onLoad*/}
                        <img className="slideImg" src="https://eyekandy.com/wp-content/uploads/2018/03/img-empty-960x640.png" alt="Google"/>
                    </div>

                    <div className="mySlides fade">
                        <p className="spani" >test2</p>
                        {/* <img className="Img" src="https://images1-ynet-prod.azureedge.net//PicServer4/2015/10/22/6574184/65741110100791640360no.jpg" alt="Ynet"/> */}
                    </div>

                    <div className="mySlides fade">
                        <p className="spani" >test3</p>
                        {/* <img className="Img" src="https://images1-ynet-prod.azureedge.net//PicServer4/2015/10/22/6574184/65741110100791640360no.jpg" alt="Ynet" /> */}
                    </div>

                    <a className="prev" onClick={(e)=>this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={(e)=>this.plusSlides(1)}>&#10095;</a>

                    </div>
                 <br/>

            </div>
        );
    }       
}
export default SlideShow;