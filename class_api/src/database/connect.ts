/**
 * Arquivo onde é iniciado nosso servidor com a conexao com nosso banco de dados
 */

 import 'reflect-metadata';
 import { createConnection } from 'typeorm';

 createConnection().then(() => console.log(`Successfully connected database`));
