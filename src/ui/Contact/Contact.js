import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.css';
import logo from './contact-guy.png';
import $ from 'jquery';

export default class Contact extends Component {

  render() {
    return (
      <section className="contact-section-container">
        <h1>Contact</h1>
        <div className="contact-form-container">
        <div className="contact-form">
          <div className="contact-inputs">
            <ContactForm />
          </div>
        </div>
      </div>
      <footer>
        <p><span>310.633.0716</span><span>dane@iliff.media</span></p>
      </footer>
    </section>
    );
  }
}
