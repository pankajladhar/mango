import React from 'react';
import Button from './../Button';
import './UserForm.scss';

const UserForm = (props) => {
    const handleClick = () => {
    }
    return (
        <div className="userForm">
            <h3>Enter you details</h3>
            <div class="form-group">
                <label for="sel1">Select Product:</label>
                <select class="form-control" id="sel1">
                    <option>1/2 dozen</option>
                    <option>1 dozen</option>
                    <option>2 dozen</option>
                    <option>3 dozen</option>
                    <option>5 dozen</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="cname">
                    Name
                        <span className="asterisk">*</span>
                </label>
                <input type="text"
                    name="cname"
                    id="cname"
                    placeholder="Please enter your name"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="emailid">Email
                    <span className="asterisk">*</span></label>
                <input type="email"
                    name="email"
                    id="emailid"
                    placeholder="Please enter your email"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Contact number
                    <span className="asterisk">*</span>
                </label>
                <input type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Please enter your contact number"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Delivery address
                    <span className="asterisk">*</span></label>
                <textarea id="address"
                    name="adress"
                    placeholder="Please enter your address"
                    className="form-control">
                </textarea>
            </div>
            <div className="btn-container">
                <Button title="Save Details" onClick={handleClick} />
            </div>
            <div className="close-btn" onClick={props.hideMenu}>x</div>
        </div>
    );
};

export default UserForm;