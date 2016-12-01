import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.css';
import logo from './contact-guy.png';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-form-container">
        <div className="contact-form">
          <h1>Let's Chat!</h1>
          <p>Send us your info and we will get back to you right away. <br /> We can't wait to work with you. </p>
          <div className="contact-inputs">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={logo} />
      </div>
    </div>
    );
  }
}
