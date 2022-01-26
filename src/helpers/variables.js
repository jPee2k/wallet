export const getCssVariable = (varName) => getComputedStyle(document.documentElement).getPropertyValue(varName);
