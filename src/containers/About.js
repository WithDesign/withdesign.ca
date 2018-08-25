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
          title="With Design | About US"
          description="We are a small ambitious digital agency who specialize in the ecommerce space. We have past experience working with some of the top brands & agencies in the business. We are also Canadien!"
          url="https://withdesign.ca/about"
          h1="About"
          sub="A small ambitious digital agency who specialize in the ecommerce space."
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
                  At With Design, we strive to help any business reach their goals no matter how small they may be. We believe in partnering with the best in the industry as that is the only way to achieve top results with a balance of speed of execution and quality.
                </p>
                <p className="h6">
                    Who We Are
                  </p>
                <p>
                  We are a small ambitious digital agency who specialize in the ecommerce space. We have past experience working with some of the top brands & agencies in the business. We are also Canadien!
                  </p>
                <p className="h6">
                    Our Guarentee
                  </p>
                <p>
                  <b>1. </b>Nothing is outsourced to overseas, everything is completed in house. <br />
                  <b>2. </b>If your not happy, we are not happy! We will work with you until you are ecstatic about our results.
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
