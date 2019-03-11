import React from 'react';
import "./ValidatedInput.css";

const ValidatedInput = (props) => {
    return (
        <input
            className={`validated-input ${props.klass} ${props.valid ? '' : 'invalid'}`}
            onChange={props.onInputChange}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            type={props.type}
        />
    );
};

export default ValidatedInput;
