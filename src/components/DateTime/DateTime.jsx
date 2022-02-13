import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DateTime = ({ className }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <time dateTime={date.toISOString()} className={className}>
      {date.toLocaleDateString()}&nbsp;{date.toLocaleTimeString()}
    </time>
  );
};

DateTime.propTypes = {
  className: PropTypes.string,
};

export default DateTime;
