import React, { Component } from 'react';
import ContactForm from './ContactForm';

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
      <div className="container">
        <h2 className="text-center">Interested In Working With Us? </h2>
        <div className="row center-xs center-sm">
          <div className="col-xs-12 col-sm-8 ">
            <div className="bid-input-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ContactFormWrapper;
