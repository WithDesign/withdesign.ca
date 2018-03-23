import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <div className="clearfix nav-wrapper">
      <a className="logo" href="/">
        <img className="img-responsive pull-left" src="./img/logo-white.svg" alt="With Design Agency" />
      </a>
      <nav>
        <Link className="btn pull-right cta" to="/start">Get Started</Link>
        <Link className="btn pull-right" to="/partners">Partners</Link>
        <Link className="btn pull-right" to="/research">Research</Link>
        <Link className="btn pull-right" to="/about">About</Link>
        <Link className="btn pull-right" to="/solutions">Solutions</Link>
        <Link className="btn pull-right" to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Header;
