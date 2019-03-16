import React from 'react';

const TextField = (props) => {
    const { lableText, type, name, value, onChange, placeholder, hasError } = props;
    const CustomTag = type === "textarea" ? "textarea" : "input";
    const handleInputChange = (event) => {
        onChange(event)
    }
    return (
        <div className="textField form-group">
            <label htmlFor={`${name}-id`}>
                {lableText}
                <span className="asterisk">*</span>
            </label>
            <CustomTag type={type}
                name={name}
                id={`${name}-id`}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`form-control ${hasError.isInvalid && 'error'}`} />
            <label className="has-error">{hasError.message}</label>
        </div>
    );
};


export default TextField;