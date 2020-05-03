import React, { useContext, useCallback } from 'react';
import axios, { AxiosError } from 'axios';

import { Transaction as TransactionType } from '../../types';
import { GlobalContextDispatch } from '../../context/GlobalState';

interface TransactionProps extends TransactionType {}

export const Transaction: React.FC<TransactionProps> = ({
  id,
  amount,
  text,
}) => {
  const dispatch = useContext(GlobalContextDispatch);

  const deleteTransaction = useCallback(
    (id) => {
      axios
        .delete(`/api/v1/transactions/${id}`)
        .then(() => {
          dispatch({
            type: 'DELETE_TRANSACTION',
            id,
          });
        })
        .catch((error: AxiosError) => {
          dispatch({
            type: 'SET_ERROR',
            error: error.response?.data.error || 'Server Error',
          });
        });
    },
    [id, dispatch]
  );

  const sign = Number(amount) < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};
