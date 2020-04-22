import mongoose, { Document } from 'mongoose';

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

interface ITransaction extends Document {
  text: string;
  amount: number;
  createdAt: string;
}

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);
