import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styles from './Contact.css';
import logo from './contact-guy.png';
import $ from 'jquery';
import pic from './contact-picture-green.jpg';
import picYellow from './contact-picture-yellow.png';
import black from './black.png';


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
      <div className="black-container">
      <img class="contact-img" src={black} />
      </div>
      <div className="pic-container">
      <img class="contact-img" src={pic} />
      </div>
      <div className="pic-container2">
      <img class="contact-img-yellow" src={picYellow} />
      </div>
      <footer>
        <p><span>310.633.0716</span><span>dane@iliff.media</span></p>
      </footer>
    </section>
    );
  }
}
