import Express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

dotenv.config();
colors.enable();

const app = Express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(
    `Server in ${process.env.NODE_ENV} mode listening on Port: ${PORT}`.blue
  );
});
