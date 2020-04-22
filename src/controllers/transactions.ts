import { RequestHandler } from 'express';
import Transaction from '@models/Transaction';

//  @desc    Get all transactions
//  @route   GET /api/v1/transactions
//  @access  Public

const getTransactions: RequestHandler = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions.map((t) => t.toObject()),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

//  @desc    Add transaction
//  @route   POST /api/v1/transactions
//  @access  Public

const addTransaction: RequestHandler = async (req, res, next) => {
  res.send('POST transaction');
};

//  @desc    Delete transaction
//  @route   DELETE /api/v1/transactions/:id
//  @access  Public

const deleteTransaction: RequestHandler = async (req, res, next) => {
  res.send('DELETE transaction');
};
export { getTransactions, addTransaction, deleteTransaction };
