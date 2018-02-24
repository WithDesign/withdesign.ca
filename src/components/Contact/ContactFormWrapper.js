import React, { Component } from 'react';
import Header from '../Header';
import ContactForm from './ContactForm';
// import { getContact } from '../../apis/siteContent';

class ContactFormWrapper extends Component {

  render() {
    // Get content for contact form

    // Render proper textareas
    // const contactTextContent = ContactMap => {
    //   return ContactMap.map(textContent => {
    //     // Setting up data
    //     const key = textContent.key;
    //     const heading = textContent.heading;
    //     const text = textContent.text;
    //
    //     return (
    //       <span key={key}>
    //         {heading &&
    //         <h3 className="font-400 mar-10-bottom">{heading}</h3>}
    //
    //         {text &&
    //           <p>{text}</p>}
    //       </span>
    //     );
    //   });
    // };

    return (
      <div>
        <Header />
        <ContactForm />
      </div>
    );
  }
}


export default ContactFormWrapper;
