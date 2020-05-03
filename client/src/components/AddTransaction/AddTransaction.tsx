import React, { useState, useContext } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

import { GlobalContextDispatch } from '../../context/GlobalState';
import { Transaction } from '../../types';

export const AddTransaction: React.FC = () => {
  const dispatch = useContext(GlobalContextDispatch);
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post<any, AxiosResponse<{ data: Transaction }>>(
        '/api/v1/transactions',
        {
          text,
          amount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        dispatch({
          type: 'ADD_TRANSACTION',
          transaction: {
            id: response.data.data.id,
            text,
            amount: Number(amount),
          },
        });
      })
      .catch((error: AxiosError) => {
        dispatch({
          type: 'SET_ERROR',
          error: error.response?.data.error || 'Server Error.',
        });
      });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setText(e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
