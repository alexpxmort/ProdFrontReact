import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';

const app = express();
createConnection();
const PORT = process.env.port || 3333;

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}! at ${new Date()}`);
});
