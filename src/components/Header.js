import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick() {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  }
  //
  render() {
    const { className } = this.props;
    const { activeMenu } = this.state;
    const isMobile = window.innerWidth <= 500;
    const isTab = window.innerWidth <= 992;
    return (
      <div className={`clearfix nav-wrapper ${className}`}>
        {(isMobile || isTab) && (
          <button
            className="mobile-nav-toggle"
            onClick={() => this.handleClick("menu-active")}
          >
            <i className="fa fa-bars" />
          </button>
        )}
        <a className="logo" href="/">
          <img
            className="img-responsive pull-left"
            src="./img/logo-white.svg"
            alt="With Design Agency"
          />
        </a>
        <nav
          className={`${isMobile || isTab ? "mobile-nav" : ""} ${
            activeMenu ? "mobile-nav-show" : "mobile-nav-hidden"
          }`}
        >
          <Link className="btn pull-right cta" to="/start" title="Get Started">
            Inquire Today
          </Link>
          <Link className="btn pull-right" to="/about" title="About Us">
            About
          </Link>
          <Link className="btn pull-right" to="/research" title="Research">
            Research
          </Link>
          <a
            className="btn pull-right"
            href="https://blog.withdesign.ca"
            title="Blog With Design"
          >
            Blog
          </a>
          <Link className="btn pull-right" to="/solutions" title="Solutions">
            Solutions
          </Link>
          <Link className="btn pull-right" to="/" title="Home">
            Home
          </Link>
        </nav>
      </div>
    );
  }
}

Header.PropTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
