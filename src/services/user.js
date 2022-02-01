const BASE_URL = 'https://wallet.goit.ua';
const ALLOWED = ['username', 'email', 'password'];

const prepareData = (data = {}) => {
  const preparedData = Object.entries(data)
    .filter(([key]) => ALLOWED.includes(key))
    .map(([key, value]) => [key, value.trim()]);
  return Object.fromEntries(preparedData);
};

export const regController = new AbortController();
export const registerUser = (data = {}) => {
  const url = new URL('/api/auth/sign-up', BASE_URL);
  const options = {
    method: 'POST',
    body: JSON.stringify(prepareData(data)),
    signal: regController.signal,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(url.toString(), options)
    .then((response) => response.json());
};
