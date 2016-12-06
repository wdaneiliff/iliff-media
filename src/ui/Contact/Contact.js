import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.css';
import logo from './contact-guy.png';
import $ from 'jquery';

export default class Contact extends Component {

  // openContactForm() {
  //   $('.contact-inputs').addClass('display');
  //   $('.contact-form-open').addClass('hide');
  // }

  render() {
    return (
      <section className="contact-section-container">
        <div className="contact-form-container">
        <div className="contact-form">
          <h1>Contact</h1>
          <div className="contact-inputs">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={logo} />
      </div>
      <footer>
        <p><span>310.633.0716</span><span>dane@iliff.media</span></p>
      </footer>
    </section>
    );
  }
}
