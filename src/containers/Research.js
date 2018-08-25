/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import SubscribeFrom from 'react-mailchimp-subscribe';
import PageSetup from '../components/PageSetup';
// import Toggle from '../components/Toggle';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Research extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="research-wrapper"
          title="With Design | Research | We are committed to educating others in eCommerce optimization and design."
          description="With Design eCommerce and design research including in depth case studies on our projects, case studies and updates."
          url="https://withdesign.ca/research"
          container={false}
        >
          <div className="banner pos-rel">
            <div className="wrapper text-center">
              <h1 className="mar-10-bottom mar-30-top weight-400 text-center main-heading">
                Cases, Research & Updates
              </h1>
              <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
                In depth case studies on our projects, case studies, research and updates. We are committed to research and educating others in the industry. If you would like to be updated about any new posts, enter your email below.
              </h2>
              <div className="mail">
                {/* <label>
                  Enter your email
                </label> */}
                <SubscribeFrom url="//logoswithdesign.us17.list-manage.com/subscribe/post?u=91a92180e8e02ffcba6947c30&amp;id=da146ea7f4" />
              </div>
              {/* <span className="text-space">or</span>
              <Link to="/start" className="btn">Get Started</Link> */}

              <div className="text-black icon">
                <i className="fa fa-angle-down" aria-hidden="true" />
              </div>
            </div>
            <img
              className="img-responsive pencils"
              src="./img/pencils.svg"
              alt="Logo Example"
            />
            <img
              className="img-responsive seo"
              src="./img/seo.svg"
              alt="Logo Example"
            />
            <img
              className="img-responsive mega"
              src="./img/mega.svg"
              alt="Logo Example"
            />
            <img
              className="img-responsive analyze"
              src="./img/analyze.svg"
              alt="Logo Example"
            />
            <img
              className="img-responsive dev"
              src="./img/dev.svg"
              alt="Logo Example"
            />
            <img
              className="img-responsive world"
              src="./img/world.svg"
              alt="Logo Example"
            />
          </div>
          <div className="container">
            <div className="row no-margin">
              <div className="col-xs-12 col-sm-2">
                <aside className="research-sidebar">
                  <h6>Topics</h6>
                  <a href="#cases">Cases</a><br />
                  <a href="#research">Research</a><br />
                  <a href="#updates">Updates</a>
                </aside>
              </div>
              <div className="col-xs-12 col-sm-10">
                <h2 id="cases">Cases</h2>
                <p><i>Comming Soon...</i></p>
                {/* <div className="row no-margin">
                  <div className="col-xs-12 col-sm-6">
                    <div className="partner-single">
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
                  <div className="col-xs-12 col-sm-6">
                    <div className="partner-single">
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
                </div>*/}
                <div className="research pad-30-bottom">
                  <h2 id="research">Research</h2>
                  <article className="no-mar-bottom no-pad-bottom">
                    <div className="article-banner">
                      <h4>UX Optimization Guide<br /><small className="weight-300 h6 no-margin">https://uxoptimizationguide.com/</small><br /><span className="weight-600 h6 no-margin">Comming Soon....</span></h4>
                    </div>
                  </article>
                </div>
                <div className="updates">
                  <h2 id="updates">Updates</h2>
                  <a className="btn btn-cta-2 pad-15 mar-15-bottom" rel="noopener noreferrer" target="_blank" href="https://blog.withdesign.ca">Go To Blog</a>
                </div>
              </div>
            </div>
          </div>
        </PageSetup>
      </div>
    );
  }
}

Research.PropTypes = propTypes;
Research.defaultProps = defaultProps;

export default Research;
