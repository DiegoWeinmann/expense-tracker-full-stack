export interface Transaction {
  id: string;
  text: string;
  amount: number;
}

export interface GlobalState {
  transactions: Transaction[];
  error: string[] | string;
  loading: boolean;
}

// export type
export type DELETE_TRANSACTION = {
  type: 'DELETE_TRANSACTION';
  id: string;
};

export type ADD_TRANSACTION = {
  type: 'ADD_TRANSACTION';
  transaction: Transaction;
};

export type SET_TRANSACTIONS = {
  type: 'SET_TRANSACTIONS';
  transactions: Transaction[];
};

export type SET_ERROR = {
  type: 'SET_ERROR';
  error: string | string[];
};

export type GlobalStateActions =
  | DELETE_TRANSACTION
  | ADD_TRANSACTION
  | SET_TRANSACTIONS
  | SET_ERROR;

export type GlobalStateReducer = (
  state: GlobalState,
  action: GlobalStateActions
) => GlobalState;

export interface GlobalStateDispatch {
  dispatch: React.Dispatch<GlobalStateActions>;
}
