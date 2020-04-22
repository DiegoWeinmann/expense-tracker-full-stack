import Express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import 'module-alias/register';
import transactionRouter from '@routes/transactions';

dotenv.config();
colors.enable();

const app = Express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use('/api/v1/transactions', transactionRouter);

app.listen(PORT, () => {
  console.log(
    `Server in ${process.env.NODE_ENV} mode listening on Port: ${PORT}`.yellow
      .bold
  );
});
