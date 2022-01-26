import React from 'react';
import propTypes from 'prop-types';
import Spinner from './components/spinner/Spinner.jsx';

function App({ data }) {
  return (
    <div className="App">
      <p>Branch: {data}</p>
      <p>React Version: {React.version}</p>

      <Spinner/>
    </div>
  );
}

App.propTypes = {
  data: propTypes.number,
};

export default App;
