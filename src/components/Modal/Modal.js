import React from "react";
import PropTypes from 'prop-types';

// create gray backgroun -> define after in css file
const backdropStyle = {
    position: 'fixed',
    top: 0,
    buttom: 0,
    left:0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0,3)',
    padding: 50
}

// create modal style -> css
const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: ' 0 auto',
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20
};

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
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}
                    <div style={footerStyle}>
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