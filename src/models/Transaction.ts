import mongoose, { Document } from 'mongoose';
import { ITransaction } from '@types';

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text.'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);
