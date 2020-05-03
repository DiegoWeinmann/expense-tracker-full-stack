import React, { useContext, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import {
  GlobalContext,
  GlobalContextDispatch,
} from '../../context/GlobalState';
import Transaction from '../Transaction';
import { Transaction as TransactionType } from '../../types';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const dispatch = useContext(GlobalContextDispatch);

  useEffect(() => {
    axios
      .get<AxiosResponse<TransactionType[]>>('/api/v1/transactions')
      .then(({ data: { data } }) => {
        dispatch({
          type: 'SET_TRANSACTIONS',
          transactions: data,
        });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        dispatch({
          type: 'SET_ERROR',
          error: error.response?.data || 'Server Error',
        });
      });
  }, [dispatch]);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};
