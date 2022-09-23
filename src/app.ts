import express from 'express';
import 'express-async-errors';
import MidddlewareErrors from './middlewere/middlewere.error';
import RouterCars from './routes/route.car';

const app = express();

app.use(express.json());

app.use('/cars', RouterCars);

app.use(MidddlewareErrors);

export default app;
