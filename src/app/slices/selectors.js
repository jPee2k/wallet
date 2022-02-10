// global
export const getLoadingState = (state) => state.global.isLoading;

// session
export const getAuthState = (state) => state.session.isAuth;
export const getUserFromState = (state) => state.session.user;

// transactions
export const getTransactionCategoriesFromState = (state) => state.finance.categories;
export const getTransactionsFromState = (state) => state.finance.data;

// modals
export const getTransactionModalState = (state) => state.global.isModalAddTransactionOpen;
export const getLogOutModalState = (state) => state.global.isModalLogoutOpen;
