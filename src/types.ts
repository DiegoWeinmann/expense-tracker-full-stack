import { Request } from 'express';
import { Document } from 'mongoose';

export interface RequestWithBody<T> extends Exclude<Request, 'body'> {
  body: T;
}

export interface TransactionJSON {
  text: string;
  amount: string;
}

export interface ITransaction extends Document {
  text: string;
  amount: number;
  createdAt: string;
}
