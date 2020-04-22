import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const incomeExpenses = transactions.reduce(
    (incomeExpenses, transaction) => {
      if (transaction.amount > 0) {
        incomeExpenses.incomes = incomeExpenses.incomes + transaction.amount;
      } else {
        incomeExpenses.expenses = incomeExpenses.expenses + transaction.amount;
      }
      return incomeExpenses;
    },
    { incomes: 0, expenses: 0 }
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${incomeExpenses.incomes.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">
          ${Math.abs(incomeExpenses.expenses).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
