/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
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
      <div className={`solutions ${className}`}>
        <PageHead
          title={'With Design | Our Solutions | Growth Tech Agency | Marketing, Design & Development.'}
          description={'A guaranteed of delivery of new marketing experiences and ideas with insights about your customers to dramatically improve your your conversion rate. '}
          url="https://withdesign.ca/"
        />
        <Header />
        <div className="page-intro process-header">
          <div className="container">
            <h1 className="text-center text-upper text-white weight-700">Solving business problems <br /><span className="weight-300 text-lower">by providing surprising insights into your hidden growth potential.</span></h1>
            <div className="row">
              <div className="col-xs-12 col-md-5">
                <LazyLoad>
                  <img
                    className="img-responsive process-header-img"
                    src="./img/process-top.svg"
                    alt="Logo Example"
                  />
                </LazyLoad>
                <div className="text-black icon text-left">
                  <a href="#process" title="View Process">
                    Our Process <br />
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-7 text-white">
                {/* <div className="no-mar-top mar-15-bottom weight-600">
                  Brand & sales growth eCommerce Stores, Product Funnel,
                  & Direct Responce Sales Pages. Brand & sales growth eCommerce Stores, Product Funnel,
                  & Direct Responce Sales Pages.
                </div> */}
                <div className="row expertise-wrapper">
                  <div className="col-xs-12 col-sm-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="mar-15-bottom weight-600">
                      Growth Marketing, and Development
                    </h6>
                    <span>
                      - Full service design & ecommerce optimization.<br/><br/>
                      <i>
                        Could include: research, strategy, design, analytics, and all the technical development.
                      </i>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="mar-15-bottom weight-600">
                      ROI centered design
                    </h6>
                    <span>
                      - Print, Deck and Promotion<br/>
                      - Digital design <br/><br/>
                      <i>
                        Could include: building a high level UI with a gorgeous UX, building a simple landing page to then crafting the perfect product label and building the brand strategy.
                      </i>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="mar-15-bottom weight-600">
                      A/B Testing & Optimization
                    </h6>
                    <span>
                      - A/B testing <br/>
                      - User & customer testing <br/>
                      - Many other research and testing methods.<br/><br/>
                      <i>
                        Could include: analysis of finding the best unique psychological triggers and value proposition insights for your growth.
                      </i>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> */}
                    <h6 className="mar-15-bottom weight-600">
                      Brand development & Personalization
                    </h6>
                    <span>
                      - Brand creation and development<br/>
                      - Social following analysis<br/><br/>
                      <i>
                        Could Include: testing and validating ideas with the top personalization methods relating to your busines within your niche on platforms like Google, Facebook, and Instagram.
                      </i>
                    </span>
                  </div>
                </div>
                <Link to="/start" className="btn btn-banner text-center mar-30-top" title="Start the conversation Today!">
                  Start the Conversation to unlock your brand’s potential!
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
                  <LazyLoad>
                    <img
                      className="img-responsive process-img"
                      src="./img/process-2.svg"
                      alt="Logo Example"
                    />
                  </LazyLoad>
                </div>
              </div>
              <div className="col-xs-11 col-md-6">
                <div className="content-column">
                  <p>
                    Through working with some of the largest brands & clients in the direct response and ecommerce industry. We built and refined a process that has given our clients great success.
                  </p>
                  <h6 className="mar-15-bottom weight-600">
                    Plan the approach
                  </h6>
                  <p>
                    When beginning a project we will alway research and define all the details about your business getting all the context to ensure the best solution is achieved. We then will conduct user research and analyze the current and historic analytics, looking for clues. We may conduct some testing during this time to better understand your audience and current brand. Once we identified every detail of your business. Hypothesis and objectives are created, this could include tasks like optimization goals, site development, branding, and so much more!
                  </p>
                  <h6 className="mar-15-bottom weight-600">
                    Build it
                  </h6>
                  <p>
                    Our hypothesis & objectives and broken down. We help with designing your brand, funnel, pages, experiments and any other design required. We then hand the designs off to our web development experts who will build the design to any spec or platform. This for example would include platforms like Shopify, Wordpress, Apache servers. Once the project is deployed we ensure all quality assurances are taken, so no bugs or hiccups occur once live. Lastly, we set up and run any tests required for goal completion. We could set up User testing, A/B testing, Surveys, etc to collect data.
                  </p>
                  <h6 className="mar-15-bottom weight-600">
                    Optimize & Repeat
                  </h6>
                  <p>
                    After collecting all the data, we complete a deep analysis of all the results. Using a variety of methods and test, we can always come to a conclusion for a solution or answers pertaining to our hypothesis. With the results we can reveal what your brands hidden potential is. Giving us a great deal of insight into your brand, competitors, and customers. The data guides us how to suggest places to optimize, build further in your brand and helps identify the next objective.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="past-results">
            <div className="container">
              <h2 className="text-upper weight-600 mar-15-bottom">Proven Past Results</h2>
              <h6 className="no-mar-top text-upper weight-400">ORGANIC RESULTS WITHIN THE FIRST DAYS AFTER EVOLUTIONARY DESIGN.</h6>
              <div className="row no-margin" >
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
                    We usually see some results of our work within the few first hours of being launched.
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
                    Tracking everything is key using methods and tools like heatmaps, eye tracking, user surveys.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="client-brands">
              <h5 className="text-center weight-300 no-margin">TRUSTED BY THE WORLD'S SMARTEST COMPANIES</h5>
              <LazyLoad>
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
              </LazyLoad>
            </div>
          </div>
          <LazyLoad>
            <div className="faq-section container">
              <h2 className="text-center text-info">Have Some Questions?</h2>
              <Toggle btnTextClose="+ Who is this service for?" btnTextOpen="- Who is this service for?">
                <p>
                  This service is for any business just starting out or just need assistance to continue the growth and optimization of your business. To ensure all your needs are met, we are in constant communication with your business and will work directly with you to ensure our strategy fits perfectly with your brand.
                </p>
              </Toggle>
              <Toggle btnTextClose="+ How exactly does this work?" btnTextOpen="- How exactly does this work?">
                <p>
                 First step is to get in contact with us to see how we can help your business grow!
                </p>
              </Toggle>
              <Toggle btnTextClose="+ How do we communicate?" btnTextOpen="-  How do we communicate?">
                <p>
                  Our main way of communication is by email. We do schedule periodic online meetings with our clients when email does not suffice.
                </p>
              </Toggle>
              <Toggle btnTextClose="+ Do you outsource any work to low quality and cheaper designers?" btnTextOpen="-  Do you outsource any work to low quality and cheaper designers?">
                <p>
                  None of our work is outsorced to low quality designers. Everything is done in-house by our team of senior level designers.
                </p>
              </Toggle>
              <Toggle btnTextClose="+ If hosting or server is involved who is in charge of it?" btnTextOpen="-  If hosting or server is involved who is in charge of it?">
                <p>
                  We prefer this is setup prior to starting a project with us. If it is not setup we will provide advice and instructions on how you can set it up.
                </p>
              </Toggle>
              <p className="text-center">
                <Link className="link" to="/contact">Have More Question? Contact Us!</Link>
              </p>
            </div>
          </LazyLoad>
          <h6 className="weight-600 text-center">
            <LazyLoad>
            <img
              className="img-resonsive icon-image"
              src="./img/money-back.svg"
              alt="money back"
            /></LazyLoad>Satisfaction Guarantee*<br />
            <small className="weight-400">
              If your not happy, we are not happy! We will work with you until you are ecstatic about your results.
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
