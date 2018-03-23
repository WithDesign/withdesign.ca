/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import SubscribeFrom from 'react-mailchimp-subscribe';
import PageSetup from '../components/PageSetup';
import Toggle from '../components/Toggle';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Research extends Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="research-wrapper"
          title=""
          description=""
          url=""
          container={false}
        >
          <div className="banner pos-rel">
            <div className="wrapper text-center">
              <h1 className="mar-10-bottom mar-30-top weight-400 text-center main-heading">
                Cases, Research & Updates
              </h1>
              <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
                Increase your conversion rate, revenue & achieve your goals by partnering with one
                of the leading optimization & design marketers in the industry.
                Increase your conversion rate, revenue & achieve your goals by partnering with one
                of the leading optimization & design marketers in the industry.
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
                <div className="row no-margin">
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
                </div>
                <div className="research pad-30-bottom">
                  <h2 id="research">Research</h2>
                  <h5>Comming Soon!</h5>
                </div>
                <div className="updates">
                  <h2 id="updates">Updates</h2>
                  <article className="update withdesign-release">
                    <div className="article-banner">
                      <h4>Withdesign.ca Site Release</h4>
                    </div>
                    <div className="row no-margin">
                      <div className="col-xs-12 col-md-3">
                        <div className="date">12/12/18</div>
                        <div className="author">
                          <img className="img/responsive" src="./img/wd.svg" alt="author" />Cody | Design Manager</div>
                      </div>
                      <div className="col-xs-12 col-md-9 content">
                        <p>
                          We'll help you produce clean, professional and world class
                          looking products without the hassle. Stop wasting precious
                          time on freelance job boards and get world class work done
                          insanely fast. We'll take great care of all your mobile & web
                          UI design projects.
                        </p>
                        <p>
                          We'll help you produce clean, professional and world class
                          looking products without the hassle. Stop wasting precious
                          time on freelance job boards and get world class work done
                          insanely fast. We'll take great care of all your mobile & web
                          UI design projects.
                        </p>
                        <p>
                          We'll help you produce clean, professional and world class
                          looking products without the hassle. Stop wasting precious
                          time on freelance job boards and get world class work done
                          insanely fast. We'll take great care of all your mobile & web
                          UI design projects.
                        </p>
                      </div>
                    </div>
                  </article>
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
