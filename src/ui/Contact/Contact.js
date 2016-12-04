import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.css';
import logo from './contact-guy.png';

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-section-container">
        <div className="contact-form-container">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <div className="contact-inputs">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={logo} />
      </div>
      <footer>
        <span>iliff Media</span>
      </footer>
    </section>
    );
  }
}
