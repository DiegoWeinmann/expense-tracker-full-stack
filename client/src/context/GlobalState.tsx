import React, { createContext, useReducer } from 'react';

import { GlobalState, GlobalStateReducer, GlobalStateDispatch } from '../types';
import { AppReducer } from '../reducers/AppReducer';

const initialState: GlobalState = {
  transactions: [],
  error: '',
  loading: false,
};

export const GlobalContext = createContext<GlobalState>(initialState);
export const GlobalContextDispatch = createContext<GlobalStateDispatch>({
  dispatch: () => {},
});

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<GlobalStateReducer>(
    AppReducer,
    initialState
  );

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
      }}
    >
      <GlobalContextDispatch.Provider value={{ dispatch }}>
        {children}
      </GlobalContextDispatch.Provider>
    </GlobalContext.Provider>
  );
};
