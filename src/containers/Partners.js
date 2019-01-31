/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import PropTypes from "prop-types";
import PageSetup from "../components/PageSetup";

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

class Partners extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="partner-wrapper "
          title="With Design | Our Partners"
          description="We partner with the best & the brightest designers & marketers
          to meet your every expectations and project."
          url="https://withdesing.ca/partners"
          h1="Brand Partners"
          sub="We partner with the best & the brightest designers & marketers
          to meet your every expectations."
        >
          <p className="text-center">
            <a
              target="_blank"
              href="https://goo.gl/forms/U0CBfl5BnSrnhBY33"
              className="link weight-600 text-upper"
            >
              Intrested in becoming a With Design Partner?
            </a>
          </p>
          <div className="row no-margin">
            <div className="col-xs-12 col-md-6">
              <div className="partner-single logos">
                <a
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://logoswithdesign.com"
                >
                  <img
                    className="img-responsive"
                    src="./img/logoswithdesign.png"
                    alt="Logo Example"
                  />
                </a>
                <p>
                  Download an free open source logo, or purchase a unique mark
                  for your project, where you alone get the exclusive rights to
                  use it. PROFESSIONAL MADE LOGOS & BRANDS. They will create the
                  perfect logo for your business or project!
                </p>
                <a
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://logos.withdesign.ca"
                >
                  Go To Partner
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="partner-single interface">
                <a
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://interface.withdesign.ca"
                >
                  <img
                    className="img-responsive"
                    src="./img/interfacewithdesign.png"
                    alt="Logo Example"
                  />
                </a>
                <p>
                  Get a dedicated design team for a low, flat monthly cost. Who
                  can turn your sketches and wireframes into beautiful UI
                  concepts or production-ready UI designs with unlimited
                  revisions & on-demand requests. They can also handle any
                  branding needs you business may have.
                </p>
                <a
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://interface.withdesign.ca"
                >
                  Go To Partner
                </a>
              </div>
            </div>
          </div>
        </PageSetup>
      </div>
    );
  }
}

Partners.PropTypes = propTypes;
Partners.defaultProps = defaultProps;

export default Partners;
