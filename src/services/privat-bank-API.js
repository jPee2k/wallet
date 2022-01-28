import axios from 'axios';

const BASE_URL = 'https://api.privatbank.ua/p24api/pubinfo';

export const cancelTokenSource = axios.CancelToken.source();
export const getExchangeRate = () => {
  const url = new URL('?exchange&json&coursid=11', BASE_URL);
  return axios.get(url.toString(), {
    cancelToken: cancelTokenSource.token,
  });
}
