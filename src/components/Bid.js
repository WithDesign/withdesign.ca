import React, { Component } from 'react';
import $ from 'jquery';
// Contact component render contact form
class BidForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bizName: '',
      name: '',
      email: '',
      message: '',
      pack1: '',
      pack2: '',
      pack3: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMsg = this.handleChangeMsg.bind(this);
    this.handleChangeBiz = this.handleChangeBiz.bind(this);
    this.handleChangePack1 = this.handleChangePack1.bind(this);
    this.handleChangePack2 = this.handleChangePack2.bind(this);
    this.handleChangePack3 = this.handleChangePack3.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  // Change state of input field so text is updated while typing
  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  // Change state of input field so text is updated while typing
  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  // Change state of input field so text is updated while typing
  handleChangeMsg(e) {
    this.setState({
      message: e.target.value,
    });
  }

  // Change state of input field so text is updated while typing
  handleChangeBiz(e) {
    this.setState({
      bizName: e.target.value,
    });
  }

  // Change state of input field so text is updated while typing
  handleChangePack1(e) {
    this.setState({
      pack1: e.target.value,
    });
  }

  handleChangePack2(e) {
    this.setState({
      pack2: e.target.value,
    });
  }

  handleChangePack3(e) {
    this.setState({
      pack3: e.target.value,
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      bizName: '',
      name: '',
      email: '',
      message: '',
      pack1: '',
      pack2: '',
      pack3: '',
    });

    $.ajax({
      url: '/../mailer.php',
      type: 'POST',
      data: {
        form_biz_name: this.state.bizName,
        form_name: this.state.name,
        form_email: this.state.email,
        form_msg: this.state.message,
        form_pack1: this.state.pack1,
        form_pack2: this.state.pack2,
        form_pack3: this.state.pack3,
      },
      cache: false,
      success: function (data) {
        // Success..
        this.setState({
          email: 'Success!',
          message: 'Message Sent!',
        });
        $('#formContact').slideUp();
        $('#formContact').after(this.state.message);
        console.log('success', data);
      }.bind(this),
      // Fail..
      error: function (xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          contactEmail: 'Uh Oh!',
          contactMessage: 'Sorry something went wrong!\nPlease send you message to:\n\nhello@withdesign.ca\n',
        });
        console.log(`${this.state.bidEmail + this.state.message}fail`);
      }.bind(this),
    });
  }

  render() {
    return (
      <form className="bid-input-wrapper pad-30-bottom" action="https://formspree.io/withdesignagency@gmail.com"
      method="POST" id="formContact">
        <label className="bid-input-label" htmlFor="name">What is your name? *</label>
        <input
          className="bid-input"
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
          name="name"
          placeholder="Enter your name."
          required
        />
        <label className="bid-input-label" htmlFor="email">What is your email address? *</label>
        <input
          className="bid-input"
          type="email"
          name="email"
          placeholder="Enter your email."
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <label className="bid-input-label" htmlFor="BizName">What's the name your business?</label>
        <input
          className="bid-input"
          type="text"
          value={this.state.bizName}
          onChange={this.handleChangeBiz}
          name="BizName"
          placeholder="Enter your business name."
        />
        <label className="bid-input-label" htmlFor="description">Tell us about your business and the type of the project(s)? The more details you can share, the better.</label>
        <textarea
          className="bid-input"
          name="description"
          placeholder="The more info the better."
          rows="12"
          cols="50"
          value={this.state.message}
          onChange={this.handleChangeMsg}
        />
        <label className="bid-input-label" htmlFor="bid">What package are you intrested in? *</label>
        {/* <p>The average bid other entrepreneurs have made are between <strong>$550 - $650</strong>, some much lower, others much higher. <strong>Every logo gets the highest quality craftsmanship</strong>. We work on the <strong>highest bidders first</strong> So higher bid, faster turnaround.</p> */}
        <div className="pack-wrapper">
          <input
            className="bid-input"
            type="checkbox"
            name="pack1"
            value={this.state.pack1}
            onChange={this.handleChangePack1}
          />
          <label htmlFor="pack1">
            UI Idea - $1498.00USD per month.
            <div className="weight-400 mar-10-top">
              <span>We also accept LTC, ETH, & DOGE</span>
            </div>
            <ul>
              <li><i className="fa fa-check" aria-hidden="true" /> Unlimited Revisions</li>
              <li><i className="fa fa-check" aria-hidden="true" />  Less than 4 Business Day Turnaround*</li>
              <li><i className="fa fa-check" aria-hidden="true" /> After 2 Months, Cancel Anytime</li>
            </ul>
          </label>
        </div>
        <div className="pack-wrapper">
          <input
            className="bid-input"
            type="checkbox"
            name="pack2"
            value={this.state.pack2}
            onChange={this.handleChangePack2}
          />
          <label htmlFor="pack2">
            Startup Essentials - $2498.00USD per month.
            <div className="weight-400 mar-10-top">
              <span>We also accept LTC, ETH, & DOGE</span>
            </div>
            <ul>
              <li><i className="fa fa-check" aria-hidden="true" /> Unlimited Revisions</li>
              <li><i className="fa fa-check" aria-hidden="true" /> Less than 3 Business Day Turnaround*</li>
              <li><i className="fa fa-check" aria-hidden="true" /> Get custom Branding<div className="pad-20-left weight-300"><small> Includes a free logo, business cards, letterhead templates and more.</small></div></li>
              <li><i className="fa fa-check" aria-hidden="true" /> After 3 Months, Cancel Anytime</li>
            </ul>
          </label>
        </div>
        <div className="pack-wrapper">
          <input
            className="bid-input"
            type="checkbox"
            name="pack3"
            value={this.state.pack3}
            onChange={this.handleChangePack3}
          />
          <label htmlFor="pack3">
            The Full Deal - $4998.00USD per month.
            <div className="weight-400 mar-10-top">
              <span>We also accept LTC, ETH, & DOGE</span>
            </div>
            <ul>
              <li><i className="fa fa-check" aria-hidden="true" /> Unlimited Revisions</li>
              <li><i className="fa fa-check" aria-hidden="true" /> Less than 2 Business Day Turnaround*</li>
              <li><i className="fa fa-check" aria-hidden="true" /> Get custom branding<div className="pad-20-left weight-300"><small> Includes a free logo, business cards, letterhead templates and more.*</small></div></li>
              <li><i className="fa fa-check" aria-hidden="true" /> Get any business materials<div className="pad-20-left weight-300"><small> Includes for example a Pitch Deck Design or Presentation Design and much more.*</small></div></li>
              <li><i className="fa fa-check" aria-hidden="true" /> Ad Creative Design<div className="pad-20-left weight-300"><small> Creatives for platforms like Facebook and AdWords.*</small></div></li>
              <li><i className="fa fa-check" aria-hidden="true" /> Cancel Anytime</li>
            </ul>
          </label>
        </div>
        <input className="clear-button btn btn-submit mar-30-top text-white" type="submit" value="Send Brief!" />
        <p>Once submitted, please allow up to 24 hours for a responce. Thanks!</p>
      </form>
    );
  }
}

export default BidForm;
