export function prepareData(data = {}, allowed = []) {
  const preparedData = Object.entries(data)
    .filter(([key]) => allowed.includes(key))
    .map(([key, value]) => {
      if (typeof value !== 'string') {
        return [key, value];
      }
      return [key, value.trim()];
    });

  return Object.fromEntries(preparedData);
}

export const getAmountSignByType = (data, types) => {
  const { amount, type } = data;
  if (type === types.dec) {
    return -amount;
  }
  return amount;
};

export default prepareData;
