import React, { useContext, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalContextDispatch } from './context/GlobalState';
import { Transaction } from './types';

function App() {
  const { dispatch } = useContext(GlobalContextDispatch);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const {
          data: { data: transactions },
        } = await axios.get<AxiosResponse<Transaction[]>>(
          '/api/v1/transactions'
        );
        dispatch({
          type: 'SET_TRANSACTIONS',
          transactions,
        });
        console.log(transactions);
      } catch (error) {
        const errors = (error as AxiosError).response?.data;
        dispatch({
          type: 'SET_ERROR',
          error: errors,
        });
      }
    };
    fetchTransactions();
  }, []);

  return (
    <>
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
