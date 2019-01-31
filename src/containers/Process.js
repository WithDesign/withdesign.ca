/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import PageHead from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toggle from "../components/Toggle";
import { Link } from "react-router";

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

class Process extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { className } = this.props;

    return (
      <div className={`solutions ${className}`}>
        <PageHead
          title={
            "With Design | Our Solutions | Growth Tech Agency | Marketing, Design & Development."
          }
          description={
            "A guaranteed of delivery of new marketing experiences and ideas with insights about your customers to dramatically improve your your conversion rate. "
          }
          url="https://withdesign.ca/"
        />
        <Header />
        <div className="page-intro process-header">
          <div className="container">
            <h1 className="text-center text-upper text-white weight-700 no-mar-bottom">
              Solving business problems <br />
              {/* <span className="weight-300 text-lower">
                by providing surprising insights into your hidden growth
                potential.
              </span> */}
            </h1>
          </div>
        </div>
        <div className="no-mar-top no-pad-top content-wrapper pad-30-right pad-30-left mar-30-bottom">
          <div className="row center-sm">
            <div className="col-xs col-sm-9">
              <h5 className="text-center weight-400">
                All of our services are specialized towards solving business
                your problems. We can always provide surprising insights into
                the hidden growth potential of your brand. Imagine all of your
                marketing experiences fully optimized.
              </h5>
              <Link
                className="btn btn-cta-1 pad-15 mar-15-top mar-15-bottom text-center center"
                to="/start"
                title="Start a conversation today!"
              >
                Start a conversation today!
              </Link>
            </div>
          </div>
          <div className="text-container container">
            <div className="row no-margin mar-15-top solution-section">
              <div className="col-xs-12 col-sm-4">
                <LazyLoad>
                  <img
                    className="img-responsive process-img"
                    src="./img/heatmap.jpg"
                    alt="Logo Example"
                  />
                </LazyLoad>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3 className="no-mar-top">Some Heading</h3>
                <span>
                  - A/B testing <br />
                  - User & customer testing <br />
                  - Many other research and testing methods.
                  <br />
                  <br />
                  Could include: analysis of finding the best unique
                  psychological triggers and value proposition insights for your
                  growth.
                </span>
                All of our services are specialized towards solving business
                your problems. We can always provide surprising insights into
                the hidden growth potential of your brand. Imagine all of your
                marketing experiences fully optimized.
              </div>
            </div>
            <div className="row no-margin solution-section">
              <div className="col-xs-12 col-sm-4">
                <LazyLoad>
                  <img
                    className="img-responsive process-img"
                    src="./img/heatmap.jpg"
                    alt="Logo Example"
                  />
                </LazyLoad>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3 className="no-mar-top">Some Heading</h3>
                <span>
                  - A/B testing <br />
                  - User & customer testing <br />
                  - Many other research and testing methods.
                  <br />
                  <br />
                  Could include: analysis of finding the best unique
                  psychological triggers and value proposition insights for your
                  growth.
                </span>
                All of our services are specialized towards solving business
                your problems. We can always provide surprising insights into
                the hidden growth potential of your brand. Imagine all of your
                marketing experiences fully optimized.
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row no-margin solution-section">
              <div className="col-xs-12 col-sm-3">
                <h2>Strategize.</h2>
                <p>
                  We will work with you directly to create a strategy that fits
                  perfectly within your business using our rigorous, highly
                  tested process. This could be anything from how to grow your
                  Shopify store, optimizing your brand, building out a new
                  product idea and so much more.
                </p>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h2>Design.</h2>
                <p>
                  We build scale ready, high conversion rate optimized digital
                  properties. This could be anything from funnel’s, store
                  development, building eCommerce infrastructure and setup on
                  any CMS, CRM or any other platform. We will also commit to any
                  brand development, marketing assets, UI/UX mockups, flows and
                  research.
                </p>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h2>Develop.</h2>
                <p>
                  We build scale ready, high conversion rate optimized digital
                  properties. This could be anything from funnel’s, store
                  development, building eCommerce infrastructure and setup on
                  any CMS, CRM or any other platform. We will also commit to any
                  brand development, marketing assets, UI/UX mockups, flows and
                  research.
                </p>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h2>Optimize.</h2>
                <p>
                  We specialize in page and funnel optimization for conversions
                  or any other metric goal. Data is used to analyze and help us
                  make decisions on all type of traffic sources from organic to
                  directed to paid traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="process-wrapper container" />
          <div className="past-results">
            <div className="container">
              <h2 className="text-upper weight-600 mar-15-bottom">
                Proven Past Results
              </h2>
              <h6 className="no-mar-top text-upper weight-400">
                ORGANIC RESULTS WITHIN THE FIRST DAYS AFTER EVOLUTIONARY DESIGN.
              </h6>
              <div className="row no-margin">
                <div className="col-xs-12 col-md-6">
                  <LazyLoad>
                    <img
                      className="img-responsive process-img"
                      src="./img/heatmap.jpg"
                      alt="Logo Example"
                    />
                  </LazyLoad>
                  <h4 className="no-mar-bottom">Results can happen fast!</h4>
                  <p>
                    We usually see some results of our work within the few first
                    hours of being launched.
                  </p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <LazyLoad>
                    <img
                      className="img-responsive process-img"
                      src="./img/graph1.png"
                      alt="Logo Example"
                    />
                  </LazyLoad>
                  <h4 className="no-mar-bottom">In Depth Analysis</h4>
                  <p>
                    Tracking everything is key using methods and tools like
                    heatmaps, eye tracking, user surveys.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="client-brands">
              <h5 className="text-center weight-300 no-margin">
                <small>Our favourite clients and customers</small>
              </h5>
              <LazyLoad>
                <div className="logo-wrapper pad-10-top pad-10-bottom middle-xs middle-sm">
                  <div>
                    <img src="./img/logos/tasties.svg" alt="Tasties Kitchen" />
                  </div>
                  <div>
                    <img src="./img/logos/blockcat.png" alt="Blockcat" />
                  </div>
                  <div>
                    <img src="./img/logos/cca-logo.svg" alt="CCA" />
                  </div>
                  <div>
                    <img src="./img/logos/cryptobyte.png" alt="Cryptobyte" />
                  </div>
                  <div>
                    <img src="./img/logos/clique.svg" alt="Clique" />
                  </div>
                  <div>
                    <img src="./img/logos/ema.svg" alt="EMA" />
                  </div>
                </div>
              </LazyLoad>
            </div>
          </div>
          <LazyLoad>
            <div className="faq-section container">
              <h2 className="text-center text-info">Have Some Questions?</h2>
              <Toggle
                btnTextClose="+ Who is this service for?"
                btnTextOpen="- Who is this service for?"
              >
                <p>
                  This service is for any business just starting out or just
                  need assistance to continue the growth and optimization of
                  your business. To ensure all your needs are met, we are in
                  constant communication with your business and will work
                  directly with you to ensure our strategy fits perfectly with
                  your brand.
                </p>
              </Toggle>
              <Toggle
                btnTextClose="+ How exactly does this work?"
                btnTextOpen="- How exactly does this work?"
              >
                <p>
                  First step is to get in contact with us to see how we can help
                  your business grow!
                </p>
              </Toggle>
              <Toggle
                btnTextClose="+ How do we communicate?"
                btnTextOpen="-  How do we communicate?"
              >
                <p>
                  Our main way of communication is by email. We do schedule
                  periodic online meetings with our clients when email does not
                  suffice.
                </p>
              </Toggle>
              <Toggle
                btnTextClose="+ Do you outsource any work to low quality and cheaper designers?"
                btnTextOpen="-  Do you outsource any work to low quality and cheaper designers?"
              >
                <p>
                  None of our work is outsorced to low quality designers.
                  Everything is done in-house by our team of senior level
                  designers.
                </p>
              </Toggle>
              <Toggle
                btnTextClose="+ If hosting or server is involved who is in charge of it?"
                btnTextOpen="-  If hosting or server is involved who is in charge of it?"
              >
                <p>
                  We prefer this is setup prior to starting a project with us.
                  If it is not setup we will provide advice and instructions on
                  how you can set it up.
                </p>
              </Toggle>
              <p className="text-center">
                <Link className="link" to="/contact">
                  Have More Question? Contact Us!
                </Link>
              </p>
            </div>
          </LazyLoad>
          <h6 className="weight-600 text-center">
            <LazyLoad>
              <img
                className="img-resonsive icon-image"
                src="./img/money-back.svg"
                alt="money back"
              />
            </LazyLoad>
            Satisfaction Guarantee*
            <br />
            <small className="weight-400">
              If your not happy, we are not happy! We will work with you until
              you are ecstatic about your results.
            </small>
          </h6>
          <div className="text-center">
            <Link to="/start" className="btn btn-cta-2 pad-10">
              Start Today
            </Link>
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
