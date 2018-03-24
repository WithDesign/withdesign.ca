/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toggle from '../components/Toggle';
import { Link } from 'react-router';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Process extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
          <div className="container">
            <h1 className="text-center text-upper text-white">What We Can Solve <br /><span className="weight-300">that will help you achive your goals!</span></h1>
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
                <Link to="/start" className="btn btn-banner text-center mar-30-top">
                  Unlock My Brands Potential Today!
                </Link>
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
              <h2 className="text-upper weight-600 mar-15-bottom">Proven Past Results</h2>
              <h6 className="no-mar-top text-upper weight-400">Results within the first week after With Design Updates<br />
                <small><i>Note: Results reflect organic traffic only.</i></small></h6>
              <div className="row no-margin" >
                <div className="col-xs-12 col-md-6">
                  <img
                    className="img-responsive process-img"
                    src="./img/heatmap.jpg"
                    alt="Logo Example"
                  />
                  <h4 className="no-mar-bottom">Heading</h4>
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
                    src="./img/graph1.png"
                    alt="Logo Example"
                  />
                  <h4 className="no-mar-bottom">Heading</h4>
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
          <div className="">
            <div className="client-brands">
              <h5 className="text-center weight-300 no-margin">TRUSTED BY THE WORLD'S SMARTEST COMPANIES</h5>
              <div className="logo-wrapper pad-30-top pad-10-bottom">
                <div>
                  <img
                    src="./img/logos/LogosWithDesign-2.svg"
                    alt="Logo Example"
                  />
                </div>
                <div>
                  <img
                    src="./img/logos/LogosWithDesign-2.svg"
                    alt="Logo Example"
                  />
                </div>
                <div>
                  <img
                    src="./img/logos/LogosWithDesign-3.svg"
                    alt="Logo Example"
                  />
                </div>
                <div>
                  <img
                    src="./img/logos/LogosWithDesign-4.svg"
                    alt="Logo Example"
                  />
                </div>
                <div>
                  <img
                    src="./img/logos/LogosWithDesign-5.svg"
                    alt="Logo Example"
                  />
                </div>
                <div>
                  <img
                    src="./img/logos/LogosWithDesign-6.svg"
                    alt="Logo Example"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq-section container">
            <h2 className="text-center text-info">Have Some Questions?</h2>
            <Toggle btnTextClose="+ Who is this service for?" btnTextOpen="- Who is this service for?">
              <p>
                For any business or startup that are working on a web or mobile app. As well as shops or agencies that have ongoing client projects and that want to improve their process and work output at a low cost.
              </p>
            </Toggle>
            <Toggle btnTextClose="+ How exactly does this work?" btnTextOpen="- How exactly does this work?">
              <p>
                When you've connected with With Design, you'll be in contact with our lead designer via email which you can use to send your projects.
                <br /><br />
                Next, when you deliver your rough wireframes, screen descriptions and any other project details you think the designer should know. We will get to work and deliver your custom design within days.
                <br /><br />
                You can always review the work, provide feedback if you require any changes and or additions. Or start implementing the designs to your process. You will alway have the ability to have as many projects or revisions you need and not worry about any price increase.
              </p>
            </Toggle>
            <Toggle btnTextClose="+ How many projects can I submit for?" btnTextOpen="-  How many projects can I submit for?">
              <p>
                You can submit for as many projects as you want! Keep in mind, your designer will only be able to work on one project at a time. To avoid any issues, make sure you schedule the work properly to ensure we can make the deadlines you require. You can always expect your tasks to be done in no more than a few business days dependant on the task.
              </p>
            </Toggle>
            <Toggle btnTextClose="+ How do we communicate?" btnTextOpen="-  How do we communicate?">
              <p>
                Our main way of communication is by email.
              </p>
            </Toggle>
            <Toggle btnTextClose="+ Do you outsource any work to low quality and cheaper designers?" btnTextOpen="-  Do you outsource any work to low quality and cheaper designers?">
              <p>
                None of our work is outsorced to low quality designers. Everything is done in-house by our team of senior level designers.
              </p>
            </Toggle>
            <p className="text-center">
              <Link className="link" to="/contact">Have More Question? Contact Us!</Link>
            </p>
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
