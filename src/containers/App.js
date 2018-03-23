import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div className="container-fluid no-padding">
      <div className="App">
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

App.PropTypes = propTypes;

export default App;
