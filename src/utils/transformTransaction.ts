import { Document } from 'mongoose';
import { ITransaction } from '@types';

export default function (object: ITransaction) {
  return {
    text: object.text,
    amount: object.amount,
    createdAt: new Date(object.createdAt).getTime(),
    id: object.id,
  };
}
