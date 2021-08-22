/**
 * Arquivo onde é iniciado nosso servidor com a conexao com nosso banco de dados
 */

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import {app} from './app'

createConnection();
const PORT = process.env.port || 3333;

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}! at ${new Date()}`);
});
