/***
 * Classe uqe inicia com os middlewares e rotas para ser usada ao startar o servidor
 */

 import express from 'express';
 import cors from 'cors';
	import routes from '../routes';
	import * as swaggerDocument from '..//swagger.json';
	import swaggerUI from 'swagger-ui-express';
	import * as bodyParser from 'body-parser';



  class App {
    public app;
     constructor(){
         this.app = express()
         this.middlewares();
         this.routes();
				 this.swaggerConf();
     }

     middlewares(){
         this.app.use(express.json());
				 this.app.use(bodyParser.json());
         this.app.use(cors());
     }

     routes(){
        this.app.use(routes);
     }

		 swaggerConf(){
			this.app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocument));
		 }
 }

 export  const app = new App().app
