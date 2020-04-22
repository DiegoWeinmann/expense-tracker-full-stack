import { Router, Request, Response } from 'express';
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from '@controllers/transactions';

const router = Router();

router.route('/').get(getTransactions).post(addTransaction);
router.route('/:id').delete(deleteTransaction);

export default router;
