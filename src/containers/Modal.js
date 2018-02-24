/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageHead from '../components/Head';
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
      <div className={`modal ${className}`}>
        <PageHead
          title={`Professional made, unlimited revision logo & brand development agency | Logos With Design`}
          description={`With Design is a unlimited revision logo & brand development agency offering high quality, flexible low cost pricing, brand & logo development services.`}
          url="https://logoswithdesign.com/professional/"
        />
        <div className="svg-shape-1" />
        <a className="mar-15 email btn btn-cta pull-left" href="mailto:hello@withdesign.ca"><i className="fa fa-envelope" /></a>
        <a className="btn btn-cta mar-15 pull-right" href="/">Back To Home</a>
        <div className="container mar-30-top content-wrapper  pad-30-right pad-30-left pad-30-bottom mar-30-bottom">
          <img className="img-responsive mar-30-top" src="./img/logo.svg" alt="Logos.withdesign" />
          <h1 className="mar-10-bottom mar-15-top text-upper weight-400 text-primary">Professional made logos & brands.</h1>
          <div className="custom-logo-content">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h3 className="weight-400 text-upper">Who We Are & What We Do</h3>
                <p>We are a small ambitious branding agency helping growing businesses & entrepreneurs build their brand. We like to focus on making high quality, world class logo designs accessible for all startups at a very flexible price. Our work can be seen in places all around the world! Submit a bid to get started!</p>
                <h3 className="weight-400 text-upper">Our Process</h3>
                <div className="row process-wrapper">
                  <div className="col-xs-12 col-sm-6">
                    <img className="img-responsive" src="./img/chat.svg" alt="" />
                    <h4 className="mar-10-bottom weight-400">Step 1</h4>
                    <p className="mar-10-top weight-400"><strong>Name a Fair & Honest Price.</strong> We have flexible pricing that fits any budget. We will then contact you within 24 hours with confirmation.</p>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <img className="img-responsive" src="./img/pencil.svg" alt="" />
                    <h4 className="mar-10-bottom weight-400">Step 2</h4>
                    <p className="mar-10-top weight-400">We will then create your vision! <strong>Get unlimited revisions in the process.</strong> We're not happy until you're 100% satisfied!</p>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <img className="img-responsive" src="./img/Happy-Mac.svg" alt="" />
                    <h4 className="mar-10-bottom weight-400">Step 3</h4>
                    <p className="mar-10-top weight-400">Once you are happy, You will <strong> recieve a custom made logo</strong> with the <strong> vector files + exclusive rights</strong> for your logo.</p>
                  </div>
                </div>
                <hr />
                <div className="examples-wrapper">
                  <h6 className="mar-10-top mar-15-bottom">Examples Of Our Work</h6>
                  <div className="row no-margin">
                    {logos.map(logo => (
                      <div className="col-xs-6 col-sm-4 pad-15-top">
                        <figure className="no-margin">
                          <img className="img-responsive" src={logo.logoImg} alt="logo" />
                        </figure>
                      </div>
                    ))};
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h5 className="mar-15-bottom pad-30-top mar-15-top text-upper weight-300 text-primary">Fill out the form to <span className="weight-600">start the custom logo process.</span></h5>
                <Bid />
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
