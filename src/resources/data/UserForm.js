import UserForm from "../../Components/UserForm";

const formDataText = {
    "cname": {
        lableText: "Name",
        type: 'text',
        placeholder: 'Enter your name',
        requiredMsg: 'Name is required.'
    },
    "email": {
        lableText: "Email",
        type: 'email',
        placeholder: 'Enter your email',
        requiredMsg: 'Email is required.',
        ruleFailedMsg: 'That is not a valid email.'
    },
    "phone": {
        lableText: "Contact number",
        type: 'tel',
        placeholder: 'Enter your Contact number',
        requiredMsg: 'Please enter your contact number',
        ruleFailedMsg: 'That is not a valid phone number.'
    },
    "address": {
        lableText: "Delivery address",
        type: 'textarea',
        placeholder: 'Enter your delivery address',
        requiredMsg: 'Delivery address is required.'
    }
}

export default formDataText;