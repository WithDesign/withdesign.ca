/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Process extends Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className="solutions">
        <PageHead
          title={'With Design | '}
          description={''}
          url="https://withdesign.ca/"
        />
        <Header />
        <div className="page-intro process-header">
          <h1 className="text-center text-upper text-white">What We Can Solve <br /><span className="weight-300">that will help you achive your goals!</span></h1>
          {/* <p className="text-center h5 text-white weight-300">
            We partner with the best & the brightest designers & marketers
            to meet your every expectations.
          </p> */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img
                  className="img-responsive process-header-img"
                  src="./img/process-top.svg"
                  alt="Logo Example"
                />
                <div className="text-black icon text-left">
                  <a href="#process">
                    Our Process <br />
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 text-white">
                <div className="no-mar-top mar-15-bottom weight-300">
                  Brand & sales growth eCommerce Stores, Product Funnel,
                  & Direct Responce Sales Pages. Brand & sales growth eCommerce Stores, Product Funnel,
                  & Direct Responce Sales Pages.
                </div>
                <div className="row expertise-wrapper">
                  <div className="col-xs-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="no-mar-top mar-15-bottom weight-400">
                      Research & Strategy Development
                    </h6>
                    <span>
                      Idea crteation, Competitor Analysis, User reasearch, &
                      Keyword research just to start
                    </span>
                  </div>
                  <div className="col-xs-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="no-mar-top mar-15-bottom weight-400">
                      ROI centered UI & UX
                    </h6>
                    <span>
                      Brand & sales growth for any pf your ecomm stores,
                      Product Funnel, and any of your other projects.
                    </span>
                  </div>
                  <div className="col-xs-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="mar-15-bottom weight-400">
                      Testing & Optimzation
                    </h6>
                    <span>
                      Converstiion Optimization, A/B Testing, Site
                      Performance Improvments, SEO & Keyword Optimization.
                    </span>
                  </div>
                  <div className="col-xs-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="mar-15-bottom weight-400">
                      Brand Analysis & development.
                    </h6>
                    <span>
                      Brand & sales growth eCommerce Stores, Product Funnel,
                      & Direct Responce Sales Pages.
                    </span>
                  </div>
                </div>
                <button className="btn btn-banner text-center mar-30-top" onClick={this.handleClick}>
                  Unlock My Brands Potential Today!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="no-mar-top no-pad-top content-wrapper pad-30-right pad-30-left">
          <div className="process-wrapper container">
            <div className="row no-margin">
              <div className="col-xs-12 no-pad col-md-6">
                <div id="process" className="">
                  <img
                    className="img-responsive process-img"
                    src="./img/process-2.svg"
                    alt="Logo Example"
                  />
                </div>
              </div>
              <div className="col-xs-11 col-md-6">
                <div className="content-column">
                  <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast.
                  </p>
                  <h6 className="mar-15-bottom weight-400">
                    Testing & Optimzation
                  </h6>
                  <span>
                    Converstiion Optimization, A/B Testing, Site
                    Performance Improvments, SEO & Keyword Optimization.
                  </span>
                  <h6 className="mar-15-bottom weight-400">
                    Testing & Optimzation
                  </h6>
                  <span>
                    Converstiion Optimization, A/B Testing, Site
                    Performance Improvments, SEO & Keyword Optimization.
                  </span>
                  <h6 className="mar-15-bottom weight-400">
                    Testing & Optimzation
                  </h6>
                  <span>
                    Converstiion Optimization, A/B Testing, Site
                    Performance Improvments, SEO & Keyword Optimization.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="past-results">
            <div className="container">
              <h2 className="text-upper weight-600">Past Results</h2>
              <div className="row no-margin" >
                <div className="col-xs-12 col-md-6">
                  <img
                    className="img-responsive process-img"
                    src="./img/process-top.svg"
                    alt="Logo Example"
                  />
                  <h4>Heading</h4>
                  <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast.
                  </p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <img
                    className="img-responsive process-img"
                    src="./img/process-top.svg"
                    alt="Logo Example"
                  />
                  <h4>Heading</h4>
                  <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h6 className="weight-600 text-center">
            <img
              className="img-resonsive icon-image"
              src="./img/money-back.svg"
              alt="money back"
            />Money Back Guarantee*<br />
            <small className="weight-400">
              Try it, Risk-Free with no hastle. Not happy with the process 7
              days in? We'll give you a full refund.
            </small>
          </h6>
          <div className="text-center">
            <Link to="/start" className="btn btn-cta-2 pad-10">Start Today</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Process.PropTypes = propTypes;
Process.defaultProps = defaultProps;

export default Process;
