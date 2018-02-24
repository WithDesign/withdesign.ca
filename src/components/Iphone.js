import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
};

function Iphone({ children, className }) {
  return (
    <div id="wrapper" className={`iphone ${className}`}>
      <div id="iphone">
        <div id="shadow"></div>
        <div id="side"></div>
        <div id="lines">
          <div>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div id="toggler">
          <div></div>
        </div>
        <div id="aux"></div>
        <div id="lightning"></div>
        <div id="bottom-speaker">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="skrews">
          <div></div>
          <div></div>
        </div>
        <div id="volume">
          <div></div>
          <div></div>
        </div>
        <div id="front">
          <div id="front-cover"></div>
          <div id="camera">
             <div></div>
          </div>
          <div id="speaker"></div>
          <div id="screen">
            {children}
            {/* <div id="circle"></div>
            <div id="bottom"></div>
            <div id="top"></div>
            <div id="slide">
              <div></div>
              slide to unlock
            </div>
            <div id="signal">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="battery">
              <div>86%</div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div> */}
          </div>
          <div id="home">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Iphone.PropTypes = propTypes;

export default Iphone;
