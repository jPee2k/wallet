import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from './components/spinner/Spinner.jsx';
import { actionCreators } from './reduxStore/actionCreators.js';

export const App = ({ hideLoader }) => {
  hideLoader();

  return (
    <div className="App">
      <p>React Version: {React.version}</p>

      <Spinner/>
    </div>
  );
}

App.propTypes = {
  hideLoader: PropTypes.func,
  showLoader: PropTypes.func,
};

// use mapDispatchToProps inside your component to get access
// to spinner switcher ( in props { showLoader, hideLoader } )
const mapDispatchToProps = (dispatch) => ({
  showLoader: () => dispatch(actionCreators.showSpinner()),
  hideLoader: () => dispatch(actionCreators.hideSpinner()),
});

export default connect(null, mapDispatchToProps)(App);
