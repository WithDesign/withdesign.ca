import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import PageHead from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeModal: "clear" };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick(modal) {
    this.setState({
      activeModal: modal
    });
  }
  render() {
    const { className } = this.props;
    const { activeModal } = this.state;

    return (
      <main className={className}>
        <PageHead
          title={
            "With Design | STRATEGIZE, DEVELOP, AND OPTIMIZE YOUR BRANDS HIDDEN POTENTIAL."
          }
          description={
            "A guaranteed of delivery of new marketing experiences and ideas with insights about your customers to dramatically improve your growth."
          }
          url="https://withdesign.ca/"
        />
        <Header />
        <div
          className={`container-fluid no-pad home ${
            activeModal !== "clear" ? "breif-modal-active" : ""
          }`}
        >
          <div className="banner pos-rel">
            <div className="wrapper text-center">
              <LazyLoad>
                <img
                  className="img-responsive banner-bottom"
                  src="./img/banner-convert.svg"
                  alt="Increase your conversion rate, revenue & achieve your goals"
                />
              </LazyLoad>
              <h1 className="mar-10-bottom mar-30-top weight-600 text-center main-heading">
                Strategize<a href="#1">1</a>, Develop<a href="#2">2</a>, and
                Optimize<a href="#3">3</a> <br />
                your brands hidden potential.
              </h1>
              <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
                Grow your business, increase your profits, and achieve your
                goals by partnering with the leading tech growth agency.
              </h2>
              <Link
                className="btn btn-banner"
                to="/start"
                title="Inquire today to unlock your brand’s potential!"
              >
                Inquire today to unlock your brand’s potential!
              </Link>
              <div>
                <div className="text-black icon">
                  <a href="#top">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="top" className="content-wrapper clearfix no-pad-top">
            <div className="pad-60-bottom">
              <div className="who-for container">
                <p>
                  <b>With Design</b> is a digital growth agency founded by{" "}
                  <a target="_blank" href="https://codyreeves.com">
                    Cody Reeves
                  </a>
                  , focused towards strategy, design, and marketing
                  optimizations with the goal of dramatically improving your
                  impact and profits of your brand. We achieve this through the
                  delivery of new tactics and ideas built from insights gained
                  through our extensive experience and in depth knowledge of the
                  psychology behind why people buy.
                  <br />
                  <br />
                  {/* From working with some of the largest brands & clients in the
                  ecommerce industry, we have built and fine tuned a process to
                  always ensure success. The process was created through rigorous
                  testing gained through our extensive experience and in depth
                  knowledge of the psychology behind why people buy. */}
                </p>
              </div>
              <div className="container">
                <h2 className="text-center no-mar-top text-upper">
                  How we can help
                </h2>
                <div className="row no-margin process-intro text-info center-sm">
                  <div id="1" className="col-xs-12 col-sm-7 text-left">
                    <img
                      className="img-responsive floater"
                      src="./img/board.png"
                      alt=""
                    />
                    <h2>
                      <img
                        className="img-responsive mar-30-top"
                        src="./img/concept.svg"
                        alt=""
                      />
                      <span className="no-margin">1</span> Strategic insights to
                      help you get more profitable.
                    </h2>
                    <p>
                      Optimize your brand and products to increase your impact
                      and profitability without any burnout. Whether you’re
                      creating something new, or you just know it’s time to
                      level up, we identify revenue potential and streamline
                      your products, offers, and sales funnels.
                      <br />
                      <br />
                      <Link className="link" to="/solutions" title="Learn More">
                        Learn More
                      </Link>
                    </p>
                  </div>
                  <div
                    id="2"
                    className="col-xs-12 col-sm-7 text-left mar-30-top"
                  >
                    <img
                      className="img-responsive floater"
                      src="./img/experience.png"
                      alt=""
                    />
                    <h2>
                      <img
                        className="img-responsive mar-30-top"
                        src="./img/build.svg"
                        alt=""
                      />
                      <span className="no-margin">2 </span> Unique digital
                      experiences, from design to development.
                    </h2>
                    <p>
                      We build custom tailored digital properties ready for
                      growth and scale. As your partner, we collaborate with you
                      to create bold and impactful online experiences that
                      connect with your customers in new ways.
                      <br />
                      <br />
                      <Link className="link" to="/solutions" title="Learn More">
                        Learn More
                      </Link>
                    </p>
                  </div>
                  <div
                    id="3"
                    className="col-xs-12 col-sm-7 text-left mar-30-top"
                  >
                    <img
                      className="img-responsive floater"
                      src="./img/growth.png"
                      alt=""
                    />
                    <h2>
                      <img
                        className="img-responsive mar-30-top"
                        src="./img/handoff.svg"
                        alt=""
                      />
                      <span className="no-margin">3</span>
                      Opportunities for potential to increase your growth.
                    </h2>
                    <p>
                      You’ve got your product/service offerings launched; now
                      it’s time to optimize and find those hidden gaps.
                      <br />
                      <br />
                      <Link className="link" to="/solutions" title="Learn More">
                        Learn More
                      </Link>
                    </p>
                    <br />
                    <hr />
                    <br />
                  </div>
                </div>
              </div>
              <p className="text-center pad-15">
                <Link
                  className="btn btn-banner"
                  to="/start"
                  title="Inquire today to unlock your brand’s potential!"
                >
                  Inquire today to unlock your brand’s potential!
                </Link>
              </p>
            </div>
            <div className="expertise no-pad-top">
              {/* <div className="text-container container">
                <div className="row no-margin">
                  <div className="col-xs-12 col-sm-4">
                    <h2>Our Solutions</h2>
                    <p>
                      All of our services are specialized towards solving
                      business your problems. We can always provide surprising
                      insights into the hidden growth potential of your brand.
                      Imagine all of your marketing experiences fully optimized.
                    </p>
                    <Link
                      className="btn btn-cta-1 pad-15 mar-15-top mar-15-bottom text-center"
                      to="/start"
                      title="Start a conversation today!"
                    >
                      Start a conversation today!
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="row no-margin">
                      <div className="col-xs-6 no-pad">
                        {/* <img className="img-responsive" src="./img/concept.svg" alt="" /> 
                        <h4 className="mar-15-bottom weight-600">
                          Growth Marketing, and Development
                        </h4>
                        <span>
                          <b className="weight-600">Full service design</b> &{" "}
                          <b className="weight-600">ecommerce optimization</b>{" "}
                          on all of your customer experiences. We take care of
                          everything from <b className="weight-600">research</b>
                          , <b className="weight-600">strategy</b>, to{" "}
                          <b className="weight-600">design</b>,{" "}
                          <b className="weight-600">analytics</b>, and all the{" "}
                          <b className="weight-600">technical development</b>.
                        </span>
                      </div>
                      <div className="col-xs-6 no-pad">
                        <h4 className="mar-15-bottom weight-600">
                          ROI centered design
                        </h4>
                        <span>
                          With Design can take care of all of your{" "}
                          <b className="weight-600">
                            print and digital designs
                          </b>{" "}
                          needs. For example, this could include things like
                          building a <b className="weight-600">high level UI</b>{" "}
                          with a <b className="weight-600">gorgeous UX</b>,
                          building a <b className="weight-600">landing page</b>{" "}
                          to then crafting the perfect{" "}
                          <b className="weight-600">product</b> label and
                          building the{" "}
                          <b className="weight-600">brand strategy.</b>
                        </span>
                      </div>
                      <div className="col-xs-6 no-pad">
                        <h4 className="mar-15-bottom weight-600">
                          A/B Testing & Optimization
                        </h4>
                        <span>
                          We help you created and{" "}
                          <b className="weight-600">optimize your hypothesis</b>
                          . Each hypothesis will be highly tested through{" "}
                          <b className="weight-600">A/B testing</b> and{" "}
                          <b className="weight-600">
                            other user research methods
                          </b>
                          . We get to know your user inside and out, getting
                          into your customers' heads to find the{" "}
                          <b className="weight-600">
                            best unique psychological triggers
                          </b>{" "}
                          and{" "}
                          <b className="weight-600">
                            value proposition insights
                          </b>{" "}
                          for better predictions.
                        </span>
                      </div>
                      <div className="col-xs-6 no-pad">
                        <h4 className="mar-15-bottom weight-600">
                          Brand development & Personalization
                        </h4>
                        <span>
                          Our brand experts will help you build a{" "}
                          <b className="weight-600">
                            better brand & social following
                          </b>
                          by testing and validating ideas with the top
                          personalization methods relating to your business.
                          They will handle{" "}
                          <b className="weight-600">all the design updates</b>{" "}
                          and provide actionable insights to achieve{" "}
                          <b className="weight-600">
                            top positioning within your niche on platforms like
                            Google, Facebook, and Instagram.
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="container cases">
                <div className="row no-margin">
                  <div className="col-xs-12 col-sm-4 sidebar">
                    <aside>
                      <h2>Our Cases</h2>
                      <p>
                        We have worked and validated our skills by partnering up
                        with small to large scale business across many marketing
                        niches.
                      </p>
                    </aside>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="partner-single case case-cryptobyte">
                      <button
                        className="clear-button"
                        onClick={() => this.handleClick("modal-1")}
                      >
                        <LazyLoad>
                          <img
                            className="img-responsive"
                            src="./img/projects/crypto/cryptobyte-banner.png"
                            alt="Logo Example"
                          />
                        </LazyLoad>{" "}
                        CryptoByte <br />
                        <span className="weight-300">
                          Building a product to go-to-market.
                        </span>
                      </button>
                      <p>
                        The founder was looking for a team to help him put
                        together a Go-to-market plan and assist with the landing
                        page design and development. SAAS Product, goal was to
                        achieve high volume sign ups via advertising on
                        platforms like Google and Facebook.
                      </p>
                      <button
                        className="link"
                        onClick={() => this.handleClick("modal-1")}
                        title="Learn about Cryptobyte Project"
                      >
                        Learn about Cryptobyte Project
                      </button>
                    </div>
                    {/* <div className="partner-single case">
                      <button className="clear-button" onClick={() => this.handleClick('modal-2')}>
                        <img
                          className="img-responsive"
                          src="./img/interfacewithdesign.png"
                          alt="Logo Example"
                        />  Probiotic
                      </button>
                      <p>
                        Learn how we were tasked with assiting developing a healthcare CPG item offer utilizing performance marketers to grows there sales.
                      </p><button className="link" onClick={() => this.handleClick('modal-2')}>Lean about Probiotic Project</button>
                    </div> */}
                    <div className="text-center">
                      <a
                        className="btn btn-cta-2 pad-15"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/research"
                        title="View More Cases"
                      >
                        View More Cases
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="client-brands text-center no-mar-bottom no-mar-top">
              <small>Our favourite clients and customers</small>
              <LazyLoad>
                <div className="logo-wrapper pad-10-top pad-10-bottom middle-xs middle-sm">
                  <div>
                    <img src="./img/logos/tasties.svg" alt="Tasties Kitchen" />
                  </div>
                  <div>
                    <img src="./img/logos/blockcat.png" alt="Blockcat" />
                  </div>
                  <div>
                    <img src="./img/logos/cca-logo.svg" alt="CCA" />
                  </div>
                  <div>
                    <img src="./img/logos/cryptobyte.png" alt="Cryptobyte" />
                  </div>
                  <div>
                    <img src="./img/logos/clique.svg" alt="Clique" />
                  </div>
                  <div>
                    <img src="./img/logos/ema.svg" alt="EMA" />
                  </div>
                </div>
              </LazyLoad>
            </div>
            <div className="client-wrapper container">
              <LazyLoad>
                <span>
                  <img
                    className="funnel left"
                    src="./img/funnel.png"
                    alt="Logo Example"
                  />
                  <img
                    className="funnel right"
                    src="./img/funnel.png"
                    alt="Logo Example"
                  />
                </span>
              </LazyLoad>
              <h3 className="text-inf text-center">What Our Clients Say.</h3>
              <p className="weight-300 text-center">
                The WithDesign team has been really impressive in terms of their
                level of knowledge and their sophisticated approach design &
                optimization. They have brought a lot of insights and design
                help that we would not have had done ourselves.
              </p>
              <div className="text-center">
                <img
                  className="company-image"
                  src="./img/logos/cryptobyte.png"
                  alt="Cryptobyte"
                />
                <span>John Keptner</span>
              </div>
              <div className="text-center mar-20-top pad-20-top">
                <hr />
                <Link
                  className="btn btn-cta-1 mar-10-top mar-10-bottom"
                  to="/start"
                  title="Inquire like many others today!"
                >
                  Inquire like many others today!
                </Link>
                <hr />
              </div>
            </div>
            <div className="partner-wrapper container">
              <h2>Our Brand Partners</h2>
              <p>
                We partner with the best & the brightest designers & marketers
                to meet your every expectations.
              </p>
              <div className="row no-margin">
                <div className="col-xs-12 col-md-6">
                  <div className="partner-single logos">
                    <a
                      className="link"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="http://logos.withdesign.ca"
                      title="Logos With Design"
                    >
                      <img
                        className="img-responsive"
                        src="./img/logoswithdesign.png"
                        alt="Logo Example"
                      />
                    </a>
                    <p>
                      Download an free open source logo, or purchase a unique
                      mark for your project, where you alone get the exclusive
                      rights to use it. PROFESSIONAL MADE LOGOS & BRANDS. They
                      will create the perfect logo for your business or project!
                    </p>
                    <a
                      className="link"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="http://logos.withdesign.ca"
                      title="Logos With Design"
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
                      title="Interface With Design"
                    >
                      <LazyLoad>
                        <img
                          className="img-responsive"
                          src="./img/interfacewithdesign.png"
                          alt="Logo Example"
                        />
                      </LazyLoad>
                    </a>
                    <p>
                      Get a dedicated design team for a low, flat monthly cost.
                      Who can turn your sketches and wireframes into beautiful
                      UI concepts or production-ready UI designs with unlimited
                      revisions & on-demand requests. They can also handle any
                      branding needs you business may have.
                    </p>
                    <a
                      className="link"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="http://interface.withdesign.ca"
                      title="Interface With Design"
                    >
                      Go To Partner
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <small>
                  <a
                    target="_blank"
                    href="https://goo.gl/forms/U0CBfl5BnSrnhBY33"
                    className="link weight-600"
                  >
                    Intrested in becoming a With Design Partner?
                  </a>
                </small>
              </div>
            </div>
            {/* <div className="case-wrapper">
              <div className="case-single">
                <h3>Logos With Design</h3>
                <p>We'll help you produce clean, professional and world class looking products without the hassle. Stop wasting precious time on freelance job boards and get world class work done insanely fast. We'll take great care of all your mobile & web UI design projects.</p>
                <a href="#">Link to case.</a>
              </div>
            </div> */}
            <h6 className="weight-600 text-center pad-15 no-mar-bottom">
              <LazyLoad>
                <img
                  className="img-resonsive icon-image"
                  src="./img/money-back.svg"
                  alt="money back"
                />
              </LazyLoad>
              Satisfaction Guarantee*
              <br />
              <small className="weight-400">
                If your not happy, we are not happy! We will work with you until
                you are ecstatic about your results.
              </small>
            </h6>
            <div className="text-center mar-30-bottom">
              <Link
                className="btn btn-cta-1 pad-10"
                to="/start"
                title="Inquire Today!"
              >
                Inquire Today!
              </Link>
            </div>
          </div>
        </div>
        <Footer />
        {(activeModal !== "clear" || activeModal === "") && (
          <div className="brief-modal case-modal">
            <div className="wrapper">
              <button
                className="close-btn"
                onClick={() => this.handleClick("clear")}
              >
                <i className="fa fa-close" />
              </button>
              {activeModal === "modal-1" && (
                <div>
                  <img
                    className="img-responsive case-banner-img"
                    src="./img/projects/crypto/cryptobyte-banner.png"
                    alt="Logo Example"
                  />
                  <div className="container">
                    <h2 className="weight-300 no-mar-top">
                      CryptoBye is a crypto currency exchange built for
                      specifically users who are new to crypto currency markets
                      and exchanges.{" "}
                    </h2>
                    <h4>The Challenge</h4>
                    <p>
                      When approched With Design, they had a very board plan
                      built around creating a new crypto currency exchnage
                      specifically built for new users within the crypto currecy
                      niche. To better identify the deliverables of the project,
                      With Design started research into what the client is tring
                      to achive for the nerw product and what type of work would
                      be required to go-to-market.
                      <br />
                      In doing so we built initially a go-to-market plan that
                      would include a variety of work from With Deisgn. Some of
                      the work included would be building a new brand, designing
                      a product to be later developed into a full application,
                      and designing a onboarding flow that would be later
                      optimized for greater lift once live.
                    </p>
                    <h4>How We Built The Solution</h4>
                    <h5>Build The Brand</h5>
                    <div className="row">
                      <div className="col-xs-12 col-sm-4">
                        {/* <p>Some text here</p> */}
                      </div>
                      <div className="col-xs-12 col-sm-8">
                        <figure className="no-margin">
                          <LazyLoad>
                            <img
                              className="img-responsive"
                              src="./img/projects/crypto/brand-development.png"
                              alt=""
                            />
                          </LazyLoad>
                          <figcaption className="text-center">
                            <small>
                              A brief overview of the process to create a brand
                              mark.
                            </small>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <h5>Craft The Product</h5>
                    <div className="row">
                      <div className="col-xs-12 col-sm-4">
                        {/* <p>some text</p> */}
                      </div>
                      <div className="col-xs-12 col-sm-8">
                        <figure className="no-margin">
                          <LazyLoad>
                            <img
                              className="img-responsive img-round"
                              src="./img/sketch/sketchbook.png"
                              alt=""
                            />
                          </LazyLoad>
                        </figure>
                      </div>
                    </div>
                    {/* <p>Some more text explaining the product</p> */}
                    {/* Display some simple wire frames -- Workflow's */}
                    <h5>The Design The Funnel</h5>
                    {/* <p>Some text goes here</p> */}
                    <div className="row no-margin">
                      <div className="col-xs-6 no-pad-left">
                        <figure className="no-margin">
                          <LazyLoad>
                            <img
                              className="img-responsive"
                              src="./img/projects/crypto/wireframe.jpg"
                              alt=""
                            />
                          </LazyLoad>
                          <figcaption>
                            <small>
                              This is a sketch taken from the hundreds created
                              in the product design process.
                            </small>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xs-6 no-pad-right">
                        <figure className="no-margin">
                          <LazyLoad>
                            <img
                              className="img-responsive"
                              src="./img/projects/crypto/lander.png"
                              alt=""
                            />
                          </LazyLoad>
                          <figcaption>
                            <small>
                              This is a sketch taken from the hundreds created
                              in the product design process.
                            </small>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <h4>The Final Product</h4>
                    {/* <p>Some text</p> */}
                    <figure className="no-margin">
                      <LazyLoad>
                        <img
                          className="img-responsive"
                          src="./img/projects/crypto/mockup.png"
                          alt=""
                        />
                      </LazyLoad>
                      <figcaption className="text-center">
                        <small>
                          A small sample of screens from within app.
                        </small>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              )}
              {activeModal === "modal-2" && (
                <div>
                  <div className="brief-header">
                    <h3 className="weight-400 text-upper mar-10-bottom no-mar-top">
                      1
                    </h3>
                  </div>
                  <div className="container">
                    <p>
                      CryptoBye is a crypto currency exchange built for
                      specifically users who are new to crypto currency markets
                      and exchanges.{" "}
                    </p>
                    <h4>The Challenge</h4>
                    <p>
                      When approched With Design, they had a very board plan
                      built around creating a new crypto currency exchnage
                      specifically built for new users within the crypto currecy
                      niche. To better identify the deliverables of the project,
                      With Design started research into what the client is tring
                      to achive for the nerw product and what type of work would
                      be required to go-to-market.
                      <br />
                      In doing so we built initially a go-to-market plan that
                      would include a variety of work from With Deisgn. Some of
                      the work included would be building a new brand, designing
                      a product to be later developed into a full application,
                      and designing a onboarding flow that would be later
                      optimized for greater lift once live.
                    </p>
                    <h4>How We Built The Solution</h4>
                    <h5>The Brand</h5>
                    {/* Create some basic images on building logo */}
                    {/* Example of building a user analysis */}
                    <h5>The Product</h5>
                    <p>Some text</p>
                    <figure className="no-margin">
                      <img src="./img/projects/crypto/sketch.png" alt="" />
                      <figcaption>
                        This is a sketch taken from the hundreds created in the
                        product design process.
                      </figcaption>
                    </figure>
                    <p>Some more text explaining the product</p>
                    {/* Display some simple wire frames -- Workflow's */}
                    <h5>The Funnel</h5>
                    <p />
                    <h4>The Final Product</h4>
                    <p>Some text</p>
                    <figure className="no-margin">
                      <img src="./img/projects/crypto/mockup.png" alt="" />
                      <figcaption>
                        This is a sketch taken from the hundreds created in the
                        product design process.
                      </figcaption>
                    </figure>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    );
  }
}

Home.PropTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
