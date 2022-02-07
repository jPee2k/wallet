export const getCssVariable = (varName) => (
  getComputedStyle(document.documentElement).getPropertyValue(varName)
);

export const getCardNumber = (id = '') => {
  const chunks = id.split('-');
  const preparedChunks = chunks.map((chunk) => {
    if (chunk.length === 4) {
      return chunk.toUpperCase();
    }
    if (chunk.length > 4) {
      return chunk.slice(0, 4).toUpperCase();
    }
    return chunk.toUpperCase();
  });

  return preparedChunks.slice(0, 4).join(' ');
};
