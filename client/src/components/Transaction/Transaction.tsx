import React, { useContext } from 'react';

import { Transaction as TransactionType } from '../../types';
import { GlobalContextDispatch } from '../../context/GlobalState';

interface TransactionProps extends TransactionType {}

export const Transaction: React.FC<TransactionProps> = ({
  id,
  amount,
  text,
}) => {
  const { dispatch } = useContext(GlobalContextDispatch);

  const sign = Number(amount) < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          dispatch({
            type: 'DELETE_TRANSACTION',
            id,
          });
        }}
      >
        x
      </button>
    </li>
  );
};
