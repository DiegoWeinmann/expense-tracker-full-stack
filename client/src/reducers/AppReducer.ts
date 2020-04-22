import { GlobalState, GlobalStateReducer } from '../types';

export const AppReducer: GlobalStateReducer = (
  state: GlobalState,
  action
): GlobalState => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
      };
    default:
      return state;
  }
};
