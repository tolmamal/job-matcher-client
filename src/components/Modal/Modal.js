import React from "react";
import PropTypes from 'prop-types';

// create gray backgroun -> define after in css file
// const backdropStyle = {
//     position: 'fixed',
//     top: 0,
//     buttom: 0,
//     left:0,
//     right: 0,
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     padding: 50,
//     display:'none'
// };

// create modal style -> css
// const modalStyle = {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     maxWidth: 500,
//     minHeight: 300,
//     margin: ' 0 auto',
//     padding: 30,
//     position: "relative"
// };

// const footerStyle = {
//     position: "absolute",
//     bottom: 20
// };

// const vvv={
//     type: "video/mp4",
//      position: "relative",
// };

export default class Modal extends React.Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
        // checking if if click 
    }
    /*  The ESC KEY  -> something miss
    onKeyUp = (e) => {
        // lookout for ESC key (27) : needs to close the 2 events
        if (e.which==27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount () {
        Document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
    }
    */

    render() {
        if (!this.props.show){
            return null;
        }
        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    {this.props.children}
                    <div className="footerStyle">
                    <video width="320" height="240" controls >
                        <source src="https://www.youtube.com/watch?v=sJUGAIf1Px0" className="vvv" preload="metadata"/>
                        {/* <source src="movie.ogg" type="video/ogg"/> */}
                    </video>
                    <button onClick={(e) => {this.onClose(e)}}>
                        close
                    </button>
                    </div>
                </div>      
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}