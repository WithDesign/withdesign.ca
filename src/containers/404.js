/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSetup from '../components/PageSetup';
import { Link } from 'react-router';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Error404 extends Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${className}`}>
        <PageSetup
          className="404-wrapper"
          title=""
          description=""
          url=""
          container={false}
        >
          <div className="banner pos-rel">
            <div className="wrapper text-center">
              <h1 className="mar-10-bottom mar-30-top weight-400 text-center main-heading">
              Opps! Are You Lost?
              </h1>
              <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
                Error 404
              </h2>
              <Link className="btn btn-banner" to="/">Back To Home</Link>
            </div>
          </div>
        </PageSetup>
      </div>
    );
  }
}

Error404.PropTypes = propTypes;
Error404.defaultProps = defaultProps;

export default Error404;
