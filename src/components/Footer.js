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
            <Link className="btn" to="/start" title="Get Started">Get Started</Link>
          </div>
          <div className="col-xs-12 col-sm-9 business">
            <h6>Business</h6>
            <Link className="" to="/partners" title="Partners">Partners</Link>
            <a className="" href="https://blog.withdesign.ca" title="Blog With Design">Blog</a>
            <Link className="" to="/research" title="Research">Research</Link>
            <Link className="" to="/about" title="About">About</Link>
            <Link className="" to="/solutions" title="Solutions">Solutions</Link>
            <Link className="" to="/contact" title="Contact Us">Contact</Link>
            <Link className="pull-right" to="/contact" title="Contact Us"><i className="fa fa-envelope" /></Link>
            <a className="pull-right" title="Github" href="https://github.com/WithDesign" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
            <a className="pull-right" title="facebook" href="https://www.facebook.com/withdesigndigital/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
            <a className="pull-right" title="Instagram" href="https://www.instagram.com/withdesigndigital/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
            <a className="pull-right" title="Twitter" href="https://twitter.com/__WithDesign" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
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
