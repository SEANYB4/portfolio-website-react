import React from "react";
import emailjs from '@emailjs/browser';
import '../Styles/about.css';
import { useRef } from "react";


const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_fak5pnf', 'template_j8g08lc', form.current, '4J0gs-UvLRW0Nd48-')
        .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!')
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleFormSubmit = (e) => {
        if (form.current) {
            sendEmail(e);
        }
    }


    return (

        <div className="contact_container">
            <h1 className="contact-heading">Contact</h1>
            <p>Using this form will send an email directly to my personal address,</p>
            <p>or alternatively, you can contact me at artemis45566@gmail.com</p>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <br></br>
                <input type="text" name="user_name"></input>
                <br></br>
                <br></br>
                <label>Email</label>
                <br></br>
                <input type="email" name="user_email"></input>
                <br></br>
                <br></br>
                <label>Message</label>
                <br></br>
                <textarea name="message" cols={50} rows={10}></textarea>
                <br></br>
                
                <div className="submit_button" onClick={handleFormSubmit}>
                    <p>Send</p>
                </div>
            </form>
        </div>
        
    )



}


export default Contact;