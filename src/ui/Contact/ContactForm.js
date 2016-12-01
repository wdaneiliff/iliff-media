import React, { Component } from 'react';
import styles from './ContactForm.css';

export default class ContactForm extends Component {
  render() {
    return (
        <form action="https://formspree.io/wdaneiliff@gmail.com"
        method="POST">
        <p>
          <span>Name: </span>
          <input className="input-name" type="text" name="name" /><br />
        </p>
        <p>
          <span>Company: </span>
          <input className="input-company" type="text" name="company" /><br />
        </p>
        <p>
          <span>Email: </span>
          <input className="input-email" type="email" name="_replyto" /><br />
        </p>
          <input className="submitForm" type="submit" value="Send Info" />
        </form>
    );
  }
}
