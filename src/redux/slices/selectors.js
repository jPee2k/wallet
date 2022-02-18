// global
export const getLoadingState = (state) => state.global.isLoading;

// session
export const getAuthState = (state) => state.session.isAuth;
export const getUserFromState = (state) => state.session.user;

// transactions
export const getTransactionsState = (state) => state.finance;
export const getTransactionCategoriesFromState = (state) => state.finance.categories;
export const getTransactionsFromState = (state) => state.finance.items;
export const getTransactionByID = (state, transactionID) => {
  return state.finance.items.find(({ id }) => id === transactionID);
};

// modals
export const getTransactionModalState = (state) => state.global.isModalAddTransactionOpen;
export const getLogOutModalState = (state) => state.global.isModalLogoutOpen;
export const getRemoveTransactionModalState = (state) => state.global.isModalRemoveTransactionOpen;
export const getTransactionID = (state) => state.global.transactionID;
