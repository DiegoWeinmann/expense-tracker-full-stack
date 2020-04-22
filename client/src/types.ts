export interface Transaction {
  id: string;
  text: string;
  amount: number;
}

export interface GlobalState {
  transactions: Transaction[];
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

export type GlobalStateActions = DELETE_TRANSACTION | ADD_TRANSACTION;

export type GlobalStateReducer = (
  state: GlobalState,
  action: GlobalStateActions
) => GlobalState;

export interface GlobalStateDispatch {
  dispatch: React.Dispatch<GlobalStateActions>;
}
