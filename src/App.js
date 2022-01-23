import React from 'react';
import propTypes from 'prop-types';

function App({ data }) {
  return (
    <div className="App">
      <p>Branch: {data}</p>
      <p>React Version: {React.version}</p>
    </div>
  );
}

App.propTypes = {
  data: propTypes.number,
};

export default App;
