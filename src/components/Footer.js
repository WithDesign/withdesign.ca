import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-3 logo-wrapper">
            <a className="" href="/">
              <img className="img-responsive" src="./img/logo-white.svg" alt="With Design Agency" />
            </a>
            <Link className="btn" to="/start">Get Started</Link>
          </div>
          <div className="col-xs-12 col-sm-9 business">
            <h6>Business</h6>
            <Link className="" to="/partners">Partners</Link>
            <Link className="" to="/research">Research</Link>
            <Link className="" to="/about">About</Link>
            <Link className="" to="/solutions">Solutions</Link>
            <Link className="" to="/contact">Contact</Link>
            <Link className="pull-right" to="/contact"><i className="fa fa-envelope" /></Link>
            <a className="pull-right" href="https://github.com/WithDesign" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
            <a className="pull-right" href="https://www.facebook.com/withdesigndigital/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
            <a className="pull-right" href="https://www.instagram.com/withdesigndigital/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
            <a className="pull-right" href="https://twitter.com/__WithDesign" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
          </div>
        </div>
        <h6 className="text-center text-white no-mar-bottom weight-300 text-primary">
          <small>With Design | A digital agency.</small>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
