/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSetup from '../components/PageSetup';
import Bid from '../components/Bid';
import Toggle from '../components/Toggle';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class GetStarted extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="started-wrapper"
          title="With Design | Get Started Today! | Guarnteed 15 minute online chat with our Managing Partners"
          description="We believe each business should have a unique solution built for them. The best way to do that is through a direct conversation to build your custom strategy to set your business apart in the competitive market space. Start working with us today to discover your hidden brand potential and optimize all your customer experiences."
          url="https://withdesign.ca/get-started"
          container={false}
        >
          <div className="row middle-md no-margin pos-rel">
            <div className="col-xs-12 col-md-6 no-pad pos-rel start-value-prop">
              <div className="started-content text-center">
                <img className="img-responsive mega-image" src="./img/mega.svg" alt="Get Started" />
                <img className="img-responsive mega-image" src="./img/mega.svg" alt="Get Started" />
                <h2 className="weight-600 text-upper mar-10-bottom">
                  Setup a quick introduction chat!
                </h2>
                <h6 className="sub-text weight-400">
                  Guarnteed 15 minute online chat with our Managing Partners.
                </h6>
                <p className="weight-300 text-center">
                  Here at With Design we believe each business should have a unique solution built for them. The best way to do that is through a direct conversation to build your custom strategy to set your business apart in the competitive market space. Start working with us today to discover your hidden brand potential and optimize all your customer experiences.
                </p>
              </div>
              <div className="start-client">
                <img className="img-responsive start-image" src="./img/start.svg" alt="Get Started" />
                <div className="client-brands text-center no-mar-bottom">
                  <small>
                    TRUSTED BY THE WORLD'S SMARTEST COMPANIES
                  </small>
                  <div className="logo-wrapper pad-10-top pad-10-bottom">
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
                        src="./img/logos/LogosWithDesign-6.svg"
                        alt="Logo Example"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 no-pad">
              <div className="started-form-wrapper">
                <div className="calendly-inline-widget" data-url="https://calendly.com/withdesign" style={{minWidth:320+'px',height:400+'px'}} />
                <hr />
                <Toggle btnClass="clear-button" btnTextOpen="- Or send us a message" btnTextClose="+ Or send us a message">
                  <Bid />
                </Toggle>
              </div>
            </div>
          </div>
        </PageSetup>
      </div>
    );
  }
}

GetStarted.PropTypes = propTypes;
GetStarted.defaultProps = defaultProps;

export default GetStarted;
