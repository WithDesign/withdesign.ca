import React, { Component } from 'react';
import Header from '../Header';
import ContactForm from './ContactForm';
import Footer from '../Footer';

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
        <div className="page-intro">
          <h1 className="text-center text-upper text-white">Contact Us</h1>
          <p className="text-center h5 text-white weight-300">
            We partner with the best & the brightest designers & marketers
            to meet your every expectations.
          </p>
        </div>
        <div className="content-wrapper pad-30-right pad-30-left pad-30-bottom mar-30-bottom no-pad-top mar-30-top">
          <div className="container">
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default ContactFormWrapper;
