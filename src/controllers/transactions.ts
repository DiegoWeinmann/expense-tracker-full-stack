import { RequestHandler } from 'express';
import Transaction from '@models/Transaction';
import { RequestWithBody, TransactionJSON } from '@types';
import transformTransaction from '@utils/transformTransaction';

//  @desc    Get all transactions
//  @route   GET /api/v1/transactions
//  @access  Public

const getTransactions: RequestHandler = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions.map(transformTransaction),
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

const addTransaction: RequestHandler = async (
  req: RequestWithBody<TransactionJSON>,
  res
) => {
  const { text, amount } = req.body;

  try {
    const transaction = await Transaction.create({
      text,
      amount,
    });
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    console.log(error);
  }
};

//  @desc    Delete transaction
//  @route   DELETE /api/v1/transactions/:id
//  @access  Public

const deleteTransaction: RequestHandler = async (req, res, next) => {
  res.send('DELETE transaction');
};
export { getTransactions, addTransaction, deleteTransaction };
