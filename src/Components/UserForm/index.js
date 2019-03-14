import React, { Component } from 'react';
import Button from './../Button';
import SimpleReactValidator from './../../simple-react-validator'
import './UserForm.scss';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            cname: ''
        }
    }

    handleClick = () => {
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
        } else {
            this.validator.showMessages();
            this.forceUpdate();
            console.log(this.validator)
        }
    }

    handleChange = (e) => {
        this.setState({ cname: e.target.value });
    }

    render() {
        return (
            <div className="userForm">
                <h3>Enter you details</h3>
                <div className="form-group">
                    <label htmlFor="sel1">Select Product:</label>
                    <select className="form-control" id="sel1">
                        {/* <option>1/2 dozen</option> */}
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
                        value={this.state.cname}
                        onChange={this.handleChange}
                        placeholder="Please enter your name"
                        className="form-control" />
                    {this.validator.message('name', this.state.cname, 'required')}
                </div>
                <div className="form-group">
                    <label htmlFor="emailid">Email
                        <span className="asterisk">*</span></label>
                    <input type="email"
                        name="email"
                        id="emailid"
                        placeholder="Please enter your email"
                        className="form-control" />
                    {/* {this.validator.message('email', this.state.cname, 'required|email')} */}
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
                    <Button title="Save Details" onClick={this.handleClick} />
                </div>
                <div className="close-btn" onClick={this.props.hideMenu}>x</div>
            </div>
        );
    }
};

export default UserForm;