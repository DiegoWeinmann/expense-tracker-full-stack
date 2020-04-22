import { RequestHandler } from 'express';
import Transaction from '@models/Transaction';

//  @desc    Get all transactions
//  @route   GET /api/v1/transactions
//  @access  Public

const getTransactions: RequestHandler = (req, res, next) => {
  res.send('GET transactions');
};

//  @desc    Add transaction
//  @route   POST /api/v1/transactions
//  @access  Public

const addTransaction: RequestHandler = (req, res, next) => {
  res.send('POST transaction');
};

//  @desc    Delete transaction
//  @route   DELETE /api/v1/transactions/:id
//  @access  Public

const deleteTransaction: RequestHandler = (req, res, next) => {
  res.send('DELETE transaction');
};
export { getTransactions, addTransaction, deleteTransaction };
