import React, { Component } from 'react';
import Header from '../Header';
import ContactForm from './ContactForm';
import Footer from '../Footer';
import PageSetup from '../PageSetup';

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
        <PageSetup
          className="contact-wrapper"
          title="Contact Us"
          description=""
          url=""
          h1="Contact Us"
          sub="We partner with the best & the brightest designers & marketers
          to meet your every expectations."
        >
          <div className="row">
            <div className="col-xs-12 col-sm-8 ">
              <div className="bid-input-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <p>We partner with the best & the brightest designers & marketers
                  to meet your every expectations.</p>
            </div>
          </div>
        </PageSetup>
      </div>
    );
  }
}


export default ContactFormWrapper;
