const prepareHeaders = (headers, { getState }) => {
  const { token } = getState().session;
  token && headers.set('authorization', `Bearer ${token}`);
  return headers;
};

export default prepareHeaders;
