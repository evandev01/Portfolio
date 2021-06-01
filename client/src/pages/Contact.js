import React, { useState } from 'react';
import ContactComp from '../components/ContactComp';
import NavTabs from '../components/NavTabs';
import HeaderContact from '../components/HeaderContact';
import API from '../utils/API';
// import e from 'cors';

require('dotenv').config();


function Contact() {

    const [firstNameState, setFirstNameState] = useState({ firstName: '' });
    const [lastNameState, setLastNameState] = useState({ lastName: '' });
    const [emailState, setEmailState] = useState({ email: '' });
    const [occupationState, setOccupationState] = useState({ occupation: '' });
    const [subjectState, setSubjectState] = useState({ subject: '' });
    const [messageState, setMessageState] = useState({ message: '' });

// onChange Event Handlers
    function onFirstNameChange(e) {
        setFirstNameState({ firstName: e.target.value })};
    function onLastNameChange(e) {
        setLastNameState({ lastName: e.target.value })};
    function onEmailChange(e) {
        setEmailState({ email: e.target.value })};
    function onOccupationChange(e) {
        e.preventDefault();
        setOccupationState({ occupation: e.target.value })};
    function onSubjectChange(e) {
        setSubjectState({ subject: e.target.value })};
    function onMessageChange(e) {
        setMessageState({ message: e.target.value })};

// Reset form event handler
    function resetForm() {
        setFirstNameState({ firstName: '' });
        setLastNameState({ lastName: '' });
        setEmailState({ email: '' });
        setOccupationState({ occupation: '' });
        setSubjectState({ subject: '' });
        setMessageState({ message: '' });
    };

// Submit event handler
    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            firstName: firstNameState.firstName,
            lastName: lastNameState.lastName,
            email: emailState.email,
            occupation: occupationState.occupation,
            subject: subjectState.subject,
            message: messageState.message
        };

        API.sendEmail(data)
            .then((response) => {
                if (response.data.status === 'success') {
                    alert(
                        "Message Sent!\nPlease allow 24hrs for a response.\nThank you for visting evanDev.com and have a great day!");
                } else if (response.data.status === 'fail') {
                    alert("Message failed to send.")}
                resetForm();
            });
    };

    return (
        <div id='contact-body'>
            <HeaderContact />
            <NavTabs />
            <ContactComp
                submit={handleSubmit}
                firstNameChange={onFirstNameChange}
                lastNameChange={onLastNameChange}
                emailChange={onEmailChange}
                occupationChange={onOccupationChange}
                subjectChange={onSubjectChange}
                messageChange={onMessageChange}
                firstName={firstNameState.firstName}
                lastName={lastNameState.lastName}
                email={emailState.email}
                occupation={occupationState.occupation}
                subject={subjectState.subject}
                message={messageState.message}
            />
        </div>
    )
};

export default Contact;