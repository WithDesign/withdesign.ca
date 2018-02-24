/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageHead from '../components/Head';
import Header from '../components/Header'
import Bid from '../components/Bid';
// import PageContent from '../components/Content/PageContent';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function getLogos() {
  return [
    {
      type: 'logo',
      logoImg: './free-logos/a-logoswithdesign-freelogo.svg',
    },
    {
      type: 'logo',
      logoImg: './free-logos/ab-logoswithdesign-freelogo.svg',
    },
    {
      type: 'logo',
      logoImg: './free-logos/s-logoswithdesign-freelogo.svg',
    },
    {
      type: 'logo',
      logoImg: './free-logos/k-logoswithdesign-freelogo.svg',
    },
    {
      type: 'logo',
      logoImg: './free-logos/av-logoswithdesign-freelogo.svg',
    },
    {
      type: 'logo',
      logoImg: './free-logos/al-logoswithdesign-freelogo.svg',
    },
  ]
};


class About extends Component {
  render () {
    const {
      className,
    } = this.props;

    const logos = getLogos();

    return (
      <div className={`${className}`}>
        <PageHead
          title={`With Design | `}
          description={``}
          url="https://withdesign.ca/"
        />
        <Header />
        <div className="container mar-30-top content-wrapper  pad-30-right pad-30-left pad-30-bottom mar-30-bottom">
          {/* <img className="img-responsive mar-30-top" src="./img/logo.svg" alt="Logos.withdesign" /> */}
          <div className="partner-wrapper container">
            <h1>Our Partners</h1>
            <p>
              We partner with the best & the brightest designers & marketers
              to meet your every expectations.
            </p>
            <p className="text-center">
              <a className="weight-600 text-upper" rel="noopener noreferrer" target="_blank" href="https://withdesign.ca/contact">Want to partner up on a project? Contact Us!</a>
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="partner-single logos">
                  <a className="link" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">
                    <img
                      className="img-responsive"
                      src="./img/logoswithdesign.png"
                      alt="Logo Example"
                    />
                  </a>
                  <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast. We'll take great care of all your mobile & web
                    UI design projects.
                  </p><a className="link" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">Go To Partner</a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="partner-single interface">
                  <a className="link" rel="noopener noreferrer" target="_blank" href="https://interfacewithdesign.com">
                    <img
                      className="img-responsive"
                      src="./img/interfacewithdesign.png"
                      alt="Logo Example"
                    />
                  </a>
                  <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast. We'll take great care of all your mobile & web
                    UI design projects.
                  </p>
                  <a className="link" rel="noopener noreferrer" target="_blank" href="https://interfacewithdesign.com">Go To Partner</a>
                </div>
              </div>
            </div>
          </div>
          <h6 className="text-center mar-30-bottom mar-30-top weight-300 text-primary"><small>With Design | A digital agency.</small></h6>
        </div>
      </div>
    );
  }
}

About.PropTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
