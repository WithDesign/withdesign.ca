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
      <div>
        {/* <div className="page-intro brief-header">
          <h3 className="weight-400 text-upper mar-10-bottom no-mar-top">
            Send us a message on how we can help!
          </h3>
          <p className="sub-text weight-300">
            Start working with us today to unlock your brands hidden
            potential.<br />
            <br />
            <span className="weight-600">Fill out the form below!</span>
            <br />{' '}
            <small>
              Have Questions? <br />
              <a
                className="link text-white"
                href="mailto:withdesignagency@gmail.com"
              >
                Contact us
              </a>
            </small>
          </p>
        </div> */}
        <div className="pad-20">
          <form
            className="bid-input-wrapper pad-30-bottom" action="https://formspree.io/withdesignagency@gmail.com"
            method="POST" id="formContact"
          >
            {/* <label className="bid-input-label" htmlFor="name">What is your name? *</label>
            <input
              className="bid-input"
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
              name="name"
              placeholder="Enter your name."
              required
              autoFocus
            /> */}
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
            <label className="bid-input-label" htmlFor="description">Your Message</label>
            <textarea
              className="bid-input"
              name="description"
              placeholder="The more info the better."
              rows="5"
              cols="50"
              value={this.state.message}
              onChange={this.handleChangeMsg}
            />
            {/* <label className="bid-input-label" htmlFor="date">Choose a preferred date & time a chat?</label>
            <input
              className="bid-input"
              type="date"
              name="date"
              value={this.state.bizName}
              onChange={this.handleChangeBiz}
            />
            <br /> */}
            {/* <select
              className="bid-input pad-10"
              type="time"
              name="appt-time"
              value={this.state.message}
              onChange={this.handleChangeMsg}
            >
              <option value="">7:00-10:00am PST</option>
              <option value="">10:00am-12:00pm PST</option>
              <option value="">12:00-2:00pm PST</option>
              <option value="">2:00-6:00pm PST</option>
            </select>
            <br /> */}
            <input className="clear-button btn btn-submit mar-30-top text-white" type="submit" value="Send" />
            {/* <p>Once submitted, please allow up to 24 hours for a responce. Thanks!</p> */}
            {/* <label className="bid-input-label" htmlFor="BizName">What's the name your business?</label> */}
            {/* <input
              className="bid-input"
              type="text"
              value={this.state.bizName}
              onChange={this.handleChangeBiz}
              name="BizName"
              placeholder="Enter your business name."
            /> */}
            {/* <label className="bid-input-label" htmlFor="description">Tell us about your business and how can we help you? The more details you can share, the better.</label>
            <textarea
              className="bid-input"
              name="description"
              placeholder="The more info the better."
              rows="5"
              cols="50"
              value={this.state.message}
              onChange={this.handleChangeMsg}
            />
            <label className="bid-input-label" htmlFor="description">How many unique visitors a month do you achieve?</label>
            <input
              className="bid-input"
              type="number"
              name="visitors"
              placeholder="Enter the number of unique visitors."
            />
            <br /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default BidForm;
