import React from 'react';
import propTypes from 'prop-types';

function App({ data }) {
  return (
    <div className="App">
      <p>Version {data}</p>
    </div>
  );
}

App.propTypes = {
  data: propTypes.number,
};

export default App;
