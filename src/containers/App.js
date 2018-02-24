import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div className="container-fluid no-padding">
      <div className="App">
        <div className="warpper">
          <div className="spacing">
            <div className="row no-margin">
              <main className="main-content col-xs-12 col-md">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

App.PropTypes = propTypes;

export default App;
