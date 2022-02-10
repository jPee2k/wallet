const getFormattedCurrency = (value) => {
  return value.toLocaleString('ua-UA', {
    style: 'currency',
    currency: 'UAH',
  });
};

export default getFormattedCurrency;
