const getFormattedCurrency = (value = '', currencyCode = 'UAH', countryCode = 'ua-UA') => {
  return value.toLocaleString(countryCode, {
    style: 'currency',
    currency: currencyCode,
  });
};

export default getFormattedCurrency;
