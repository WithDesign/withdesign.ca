/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSetup from '../components/PageSetup';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class About extends Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="about-wrapper"
          title=""
          description=""
          url=""
          h1="About"
          sub="We partner with the best & the brightest designers & marketers
          to meet your every expectations."
        >
          <div className="row">
            {/* <div className="col-xs-12 col-md-4 pos-rel">
              <img
                className="img-responsive mission-image first"
                src="./img/team.svg"
                alt="Logo Example"
              />
              <img
                className="img-responsive mission-image last"
                src="./img/team.svg"
                alt="Logo Example"
              />
            </div> */}
            <div className="col-xs-12 col-md">
              <div className="pad-30-top pad-30-bottom">
                <p className="h6">
                    Our Mission
                  </p>
                <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast. We'll take great care of all your mobile & web
                    UI design projects.
                  </p>
                <p className="h6">
                    Who We Are
                  </p>
                <p>
                    We'll help you produce clean, professional and world class
                    looking products without the hassle. Stop wasting precious
                    time on freelance job boards and get world class work done
                    insanely fast. We'll take great care of all your mobile & web
                    UI design projects.
                  </p>
                <p className="h6">
                    Our Guarentee
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
            <div className="col-xs-12 col-md-4 pos-rel">
              <img
                className="img-responsive mission-image pipe"
                src="./img/funnel.png"
                alt="Logo Example"
              />
              <img
                className="img-responsive mission-image last"
                src="./img/team.svg"
                alt="Logo Example"
              />
            </div>
          </div>
        </PageSetup>
      </div>
    );
  }
}

About.PropTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
