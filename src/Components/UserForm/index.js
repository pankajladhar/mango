import React, { Component } from 'react';
import Button from './../UI/Button';
import TextField from './../UI/TextField';
import FormValidator from './FormValidator';
import FullPageLoader from './../UI/FullPageLoader'
import { WriteInFirebase } from './../../Firebase';
import formDataText from './../../resources/data/UserForm';
import { ourProductsData } from './../../resources/data'
import './UserForm.scss';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.formData = formDataText
        this.validator = new FormValidator([
            {
                field: 'cname',
                method: 'isEmpty',
                validWhen: false,
                message: this.formData['cname'].requiredMsg
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: this.formData['email'].requiredMsg
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: this.formData['email'].ruleFailedMsg
            },
            {
                field: 'phone',
                method: 'isEmpty',
                validWhen: false,
                message: this.formData['phone'].requiredMsg
            },
            {
                field: 'phone',
                method: 'matches',
                args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
                validWhen: true,
                message: this.formData['phone'].requiredMsg
            },
            {
                field: 'address',
                method: 'isEmpty',
                validWhen: false,
                message: this.formData['address'].requiredMsg
            },
        ]);

        this.state = {
            cname: '',
            email: '',
            phone: '',
            address: '',
            selectedProduct: this.props.selectedProduct || '1 dozen',
            showFullPageLoader: false,
            validation: this.validator.valid()
        }

        this.submitted = false;
    }

    getFromData = (validation, name) => {
        const fieldName = name
        return {
            lableText: this.formData[fieldName].lableText,
            type: this.formData[fieldName].type,
            name: fieldName,
            value: this.state[fieldName],
            onChange: this.handleInputChange,
            placeholder: this.formData[fieldName].placeholder,
            hasError: {
                isInvalid: validation[fieldName].isInvalid,
                message: validation[fieldName].message
            }
        }
    }

    handleInputChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleFormSubmit = () => {
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {
            this.setState({ showFullPageLoader: true });
            let data = {
                selectedProduct: this.state.selectedProduct,
                name: this.state.cname,
                email: this.state.email,
                contactNumber: this.state.phone,
                address: this.state.address,
            }
            WriteInFirebase(data, "customers").then(() => {
                this.setState({
                    showFullPageLoader: false
                }, () => {
                    this.props.showSucessMessage()
                });
            })
        }
    }

    render() {
        let validation = this.submitted ?                         // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation
        return (
            <div className="userForm">
                <h3>Enter your details</h3>
                <div className="form-group">
                    <label htmlFor="sel1">Select Product:</label>
                    <select className="form-control"
                        value={this.state.selectedProduct}
                        name="selectedProduct"
                        onChange={this.handleInputChange}
                        id="sel1">
                        {
                            ourProductsData.map((d)=> {
                                return (
                                    <option key={d.title} value={d.title}>{d.title}</option>            
                                )
                            })
                        }
                    </select>
                </div>
                <TextField {...this.getFromData(validation, 'cname')} />
                <TextField {...this.getFromData(validation, 'email')} />
                <TextField {...this.getFromData(validation, 'phone')} />
                <TextField {...this.getFromData(validation, 'address')} />
                <div className="btn-container">
                    <Button title="Save Details" onClick={this.handleFormSubmit} />
                </div>
                <div className="close-btn" onClick={this.props.hideMenu}>x</div>
                {this.state.showFullPageLoader && <FullPageLoader />}
            </div>
        );
    }
};

export default UserForm;