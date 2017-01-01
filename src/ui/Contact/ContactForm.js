import React, { Component } from 'react';
import styles from './ContactForm.css';
import $ from 'jquery';


export default class ContactForm extends Component {

  // closeContactForm() {
  //   $('.contact-inputs').removeClass('display');
  //   $('.contact-form-open').removeClass('hide');
  // }

  render() {
    return (
        <form action="https://formspree.io/wdaneiliff@gmail.com"
        method="POST">
        <p>
          <span>Name: </span>
          <input className="input-name" type="text" name="name" /><br />
        </p>
        <p>
          <span>Email: </span>
          <input className="input-email" type="email" name="_replyto" /><br />
        </p>
        <p>
          <span>Message: </span><br />
          <textArea className="input-message" type="email" name="_replyto" /><br />
        </p>
          <input className="submitForm" type="submit" value="Submit" />
        </form>
    );
  }
}
