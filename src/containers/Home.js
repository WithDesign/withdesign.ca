import React, { Component } from "react";
import PropTypes from "prop-types";
import PageHead from "../components/Head";
import Header from "../components/Header";
import Toggle from "../components/Toggle";
import Iphone from "../components/Iphone";
import Bid from "../components/Bid";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
// import SubscribeFrom from 'react-mailchimp-subscribe';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    const { className } = this.props;

    const { isShow } = this.state;

    const isMobile = window.innerWidth <= 500;
    const isTab = window.innerWidth <= 992;

    return (
      <main className={className}>
        <PageHead
          title={`With Design | `}
          description={``}
          url="https://withdesign.ca/"
        />
        <Header />
        <div
          className={`container-fluid no-pad ${isShow
            ? "breif-modal-active"
            : ""}`}
        >
          <div className="banner pos-rel">
            <div className="wrapper text-center">
              <img
                className="img-responsive banner-bottom"
                src="./img/banner-convert.svg"
              />
              <h1 className="mar-10-bottom mar-30-top weight-400 text-center main-heading">
                Strategize<a href="#1">1</a>, Develop<a href="#2">2</a>, and
                Optimize<a href="#3">3</a> <br />your brands hidden potential.
              </h1>
              <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
                Increase your conversion rate & revenue by partnering with one
                of the leading optimization & design marketers in the Direct
                Responce & eCommerce industry.
              </h2>
              <button className="btn" onClick={this.handleClick}>
                Unlock My Brands Potential Today!
              </button>
              <div className="text-black icon">
                <i className="fa fa-angle-down" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="content-wrapper clearfix">
            <div className="container pad-60-bottom">
              <div className="row process-intro text-info">
                <div id="1" className="col-xs-12 col-sm-4">
                  <h2>
                    <img
                      className="img-responsive mar-30-top"
                      src="./img/concept.svg"
                      alt=""
                    />
                    <span className="no-margin">1</span> Plan the approach.
                  </h2>
                  <p>
                    We will work with you directly to create a strategy that
                    fits prefectly within your brand using our rigorous & highly
                    tested process.
                  </p>
                </div>
                <div id="2" className="col-xs-12 col-sm-4">
                  <h2>
                    <img
                      className="img-responsive mar-30-top"
                      src="./img/build.svg"
                      alt=""
                    />
                    <span className="no-margin">2 </span> Build It.
                  </h2>
                  <p>
                    We will build the strategy, this could be anything from
                    funnel development, marketing direction, further brand
                    development & much more.
                  </p>
                </div>
                <div id="3" className="col-xs-12 col-sm-4">
                  <h2>
                    <img
                      className="img-responsive mar-30-top"
                      src="./img/handoff.svg"
                      alt=""
                    />
                    <span className="no-margin">3</span>
                    Optimize & repeat.
                  </h2>
                  <p>
                    Once built we will fine tune the entire flow to get you the
                    best performance, sales growth, and meet every expectation
                    you may have.
                  </p>
                </div>
              </div>
            </div>
            <div className="who-for container">
              <h2>Who is this service for?</h2>
              <img alt="money" className="img-responsive money sm" src="./img/money.png" />
              <img alt="credit" className="img-responsive credit sm" src="./img/credit.png" />
              <img alt="world" className="img-responsive world sm" src="./img/world.png" />
              <img alt="box" className="img-responsive box sm" src="./img/box.png" />
              <img alt="thumbs" className="img-responsive thumbs sm" src="./img/thumbs.png" />
              <p>
                This service is for any ecomm & product buisness wanting to grow
                there sales & revenue that fits prefectly within there brand. This service is for any ecomm & product buisness wanting to grow there sales & revenue that fits prefectly within there brand.
              </p>
              <img alt="device" className="img-responsive phone" src="./img/phone.png" />
            </div>
            <div className="expertise">
              <div className="text-container container">
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <h2>Our Expertise</h2>
                    <p>
                      We have a wide range of skills specilized towards increase your
                      sales & revenue for any of your ecomm projects.
                    </p>
                    <button
                      className="btn btn-cta-1 pad-15 mar-15-top text-center"
                      onClick={this.handleClick}
                    >
                      Submit A Brief Today!
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="row">
                      <div className="col-xs-6 no-pad">
                        {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                        <h4 className="mar-15-bottom weight-400">
                          Research & Strategy Development
                        </h4>
                        <span>
                          Idea crteation, Competitor Analysis, User reasearch, &
                          Keyword research just to start
                        </span>
                      </div>
                      <div className="col-xs-6 no-pad">
                        {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                        <h4 className="mar-15-bottom weight-400">
                          ROI centered UI & UX
                        </h4>
                        <span>
                          Brand & sales growth for any pf your ecomm stores,
                          Product Funnel, and any of your other projects.
                        </span>
                      </div>
                      <div className="col-xs-6 no-pad">
                        {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                        <h4 className="mar-15-bottom weight-400">
                          Testing & Optimzation
                        </h4>
                        <span>
                          Converstiion Optimization, A/B Testing, Site
                          Performance Improvments, SEO & Keyword Optimization.
                        </span>
                      </div>
                      <div className="col-xs-6 no-pad">
                        {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                        <h4 className="mar-15-bottom weight-400">
                          Brand Analysis & development.
                        </h4>
                        <span>
                          Brand & sales growth eCommerce Stores, Product Funnel,
                          & Direct Responce Sales Pages.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container cases">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 sidebar">
                    <aside>
                      <h2>Our Cases</h2>
                      <p>
                        We have a wide range of skills specilized towards increase your
                        sales & revenue for any of your ecomm projects.
                      </p>
                    </aside>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="partner-single case">
                      <a className="" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">
                        <img
                          className="img-responsive mar-30-top"
                          src="./img/handoff.svg"
                          alt=""
                        />  Title here
                      </a>
                      <p>
                        We'll help you produce clean, professional and world class
                        looking products without the hassle. Stop wasting precious
                        time on freelance job boards and get world class work done
                        insanely fast. We'll take great care of all your mobile & web
                        UI design projects.
                      </p><a className="link" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">View 'Name Here' Case</a>
                    </div>
                    <div className="partner-single case">
                      <a className="" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">
                      <img
                        className="img-responsive mar-30-top"
                        src="./img/handoff.svg"
                        alt=""
                      />  Title here
                      </a>
                      <p>
                        We'll help you produce clean, professional and world class
                        looking products without the hassle. Stop wasting precious
                        time on freelance job boards and get world class work done
                        insanely fast. We'll take great care of all your mobile & web
                        UI design projects.
                      </p><a className="link" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">View 'Name Here' Case</a>
                    </div>
                    {/* <a className="" rel="noopener noreferrer" target="_blank" href="https://logoswithdesign.com">
                      View More Cases
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="client-wrapper container">
              <img
                className="funnel left"
                src="./img/funnel.png"
                alt="Logo Example"
              />
              <img
                className="funnel right"
                src="./img/funnel.png"
                alt="Logo Example"
              />
              <h3 className="text-inf text-center">What Our Clients Say.</h3>
              <p className="weight-300 text-center">
                We'll help you produce clean, professional and world class
                looking products without the hassle. Stop wasting precious time
                on freelance job boards and get world class work done insanely
                fast. We'll take great care of all your mobile & web UI design
                projects.
              </p>
              <div className="text-center">
                <img className="company-image" src="./img/logos/LogosWithDesign-2.svg" alt="Logo Example" />
                <span>Name goes here - company</span>
              </div>
              <div className="text-center mar-20-top pad-20-top">
                <hr />
                <button className="btn btn-cta-1 mar-10-top mar-10-bottom" onClick={this.handleClick}>Increase Your Revenue Like Many Others Today!</button>
                <hr />
              </div>
            </div>
            {/* <div className="">
              <div className="client-brands">
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
                <div className="text-center cta-bar">
                  <button
                    className="btn pad-15 mar-15-top text-center"
                    onClick={this.handleClick}
                  >
                    Increase Your Revenue Like Many Others Today!
                  </button>
                </div>
              </div>
            </div> */}
            <div className="partner-wrapper container">
              <h2>Our Partners</h2>
              <p>
                We partner with the best & the brightest designers & marketers
                to meet your every expectations.
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
            {/* <div className="case-wrapper">
              <div className="case-single">
                <h3>Logos With Design</h3>
                <p>We'll help you produce clean, professional and world class looking products without the hassle. Stop wasting precious time on freelance job boards and get world class work done insanely fast. We'll take great care of all your mobile & web UI design projects.</p>
                <a href="#">Link to case.</a>
              </div>
            </div> */}
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
              <button
                className="btn btn-cta-2 pad-10"
                onClick={this.handleClick}
              >
                Submit A Brief!
              </button>
            </div>
          </div>
        </div>
        <footer>
          <p className="text-center">
            <small>
              <a className="text-white" href="/policy">
                Policies
              </a>
            </small>{" "}
            |{" "}
            <small>
              <a className="text-white" href="mailto:hello@withdesign.ca">
                Contact us
              </a>
            </small>
          </p>
          <h6 className="text-center text-white mar-30-bottom mar-30-top weight-300 text-primary">
            <small>With Design | A digital agency.</small>
          </h6>
        </footer>
        {isShow && (
          <div className="brief-modal">
            <div className="wrapper">
              <button className="close-btn" onClick={this.handleClick}>
                <i className="fa fa-close" />
              </button>
              <div className="brief-header">
                <h3 className="weight-400 text-upper mar-10-bottom no-mar-top">
                  Submit A Brief
                </h3>
                <p className="sub-text weight-300">
                  Start working with us today to unlock your brands hidden
                  potential.<br />
                  <br />
                  <span className="weight-600">Submit a brief today!</span>
                  <br />{" "}
                  <small>
                    Have Questions? <br />
                    <a
                      className="link text-white"
                      href="mailto:withdesignagency@gmail.com"
                    >
                      Contact us
                    </a>
                  </small>
                </p>
              </div>
              <div className="pad-20">
                <Bid />
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}

Home.PropTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
