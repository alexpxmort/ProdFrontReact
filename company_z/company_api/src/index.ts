import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';
import * as swaggerDocument from './swagger.json';
import swaggerUI from 'swagger-ui-express';

const app = express();
createConnection();
const PORT = process.env.port || 3333;

app.use(bodyParser.json());
app.use(routes);
app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}! at ${new Date()}`);
});
