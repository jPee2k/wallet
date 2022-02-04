import truncate from 'lodash.truncate';
import chunk from 'lodash.chunk';

export const getCssVariable = (varName) => (
  getComputedStyle(document.documentElement).getPropertyValue(varName)
);

export const getCardNumber = (token = '') => {
  const options = {
    length: 16,
    omission: '',
  };

  const symbols = truncate(token, options).toUpperCase().split('');
  return chunk(symbols, 4).map((innerArr) => innerArr.join('')).join(' ');
};
