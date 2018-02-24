import React from 'react'
// import PropTypes from 'prop-types'
//
// const propTypes = {
// };

function Header() {
  return (
    <div className="clearfix nav-wrapper">
      <a className="logo" href="/">
        <img className="img-responsive pull-left" src="./img/logo.svg" alt="With Design Agency" />
      </a>
      <nav>
        <a className="btn pull-right" href="Contact">Contact</a>
        <a className="btn pull-right" href="Partners">Partners</a>
        <a className="btn pull-right" href="About">About</a>
        <a className="btn pull-right" href="Process">Process</a>
        <a className="btn pull-right" href="/">Home</a>
        {/* <a className="btn pull-right" href="#getStarted">Cases</a> */}
      </nav>
    </div>
  );
}

// Header.PropTypes = propTypes;
// Header.defaultProps = defaultProps;

export default Header;
