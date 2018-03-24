/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSetup from '../components/PageSetup';
import Bid from '../components/Bid';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class GetStarted extends Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="started-wrapper"
          title=""
          description=""
          url=""
          h1=""
          sub=""
          container={false}
        >
          <div className="row no-margin pos-rel">
            <div className="col-xs-12 col-md-8 no-pad pos-rel start-value-prop">
              <div className="started-content text-center">
                <img className="img-responsive mega-image" src="./img/mega.svg" alt="Get Started" />
                <img className="img-responsive mega-image" src="./img/mega.svg" alt="Get Started" />
                <h2 className="weight-600 text-upper mar-10-bottom">
                  Send us a message on how we can help!
                </h2>
                <h6 className="sub-text weight-400">
                  Start working with us today to unlock your brands hidden
                  potential.
                </h6>
                <p className="weight-300 text-center">
                  We'll help you produce clean, professional and world class
                  looking products without the hassle. Stop wasting precious time
                  on freelance job boards and
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
            <div className="col-xs-12 col-md-4 no-pad">
              <div className="started-form-wrapper">
                <Bid />
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
