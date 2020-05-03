import { RequestHandler } from 'express';
import Transaction from '@models/Transaction';
import { RequestWithBody, TransactionJSON } from '@types';
import transformTransaction from '@utils/transformTransaction';
import { Error } from 'mongoose';

//  @desc    Get all transactions
//  @route   GET /api/v1/transactions
//  @access  Public

const getTransactions: RequestHandler = async (_req, res) => {
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
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(
        (err) => (err as Error).message
      );
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

//  @desc    Delete transaction
//  @route   DELETE /api/v1/transactions/:id
//  @access  Public

const deleteTransaction: RequestHandler = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(401).json({
        success: false,
        error: 'No transaction found.',
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error.',
    });
  }
};
export { getTransactions, addTransaction, deleteTransaction };
