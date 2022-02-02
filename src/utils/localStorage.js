export const isAvailableStorage = () => {
  try {
    localStorage.setItem('key', 'value');
    localStorage.removeItem('key');
    return true;
  } catch {
    return false;
  }
};

export const setDataToLocalStorage = (data = {}) => {
  isAvailableStorage() && Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key.toString(), JSON.stringify(value));
  });
};

export const getDataFromLocalStorage = (...keys) => {
  if (!isAvailableStorage()) {
    return {};
  }

  if (keys.length === 1 && keys[0]) {
    return JSON.parse(localStorage.getItem(keys[0]));
  }

  return keys.reduce((acc, key) => {
    acc[key] = JSON.parse(localStorage.getItem(key));
    return acc;
  }, {});
};
