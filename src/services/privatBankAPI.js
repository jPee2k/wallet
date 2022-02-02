const BASE_URL = 'https://api.privatbank.ua/p24api/pubinfo';

export const controller = new AbortController();
export const getExchangeRate = () => {
  const url = new URL('?exchange&json&coursid=11', BASE_URL);
  return fetch(url.toString(), { signal: controller.signal })
    .then((response) => response.json());
};
