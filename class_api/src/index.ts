/**
 * Arquivo onde é iniciado nosso servidor com a conexao com nosso banco de dados
 */

 import 'reflect-metadata';
 import {app} from '../src/app/app'
 import './database/connect';

 const PORT = process.env.port || 3333;

 app.listen(PORT, () => {
	 console.log(`Server running on PORT:${PORT}! at ${new Date()}`);
 });
