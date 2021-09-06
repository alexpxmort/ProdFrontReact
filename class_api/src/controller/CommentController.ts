import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Comment } from "../app/models/Comment";
import '../database/connect';
import commentRepository from '../database/repositories/CommentRepository';
import { schemaComment } from '../validations/comments.validation';
import * as Yup from 'yup';
import { Classe } from "../app/models/Classe";


export class CommentController {

    private commentRepository = new commentRepository(getRepository,Comment);
		private classeRepository = new commentRepository(getRepository,Classe);


    async create(request: Request, response: Response) {
			let {body} = request;

			try {
				await schemaComment.validate(body, { abortEarly: false });
				try {

					let classeExists = await this.classeRepository.get(body.id_class);

					if(!classeExists){
						return response.status(404).json({error:true,msg:'Classe Not Found!'});
					}

					const comment = await this.commentRepository.save(body);
					return response.status(200).json({ error: false, comment });
				} catch (err) {
					return response.status(400).json({ msg: `Erro ao criar comment: ${err.message}`, error: true });
				}
			} catch (err) {
				const errorMessages = {};

				if (err instanceof Yup.ValidationError) {
					err.inner.forEach((error) => {
						errorMessages[error.path] = error.message;
					});
				}

				return response.status(400).json({ msg: 'Dados Inválidos', error: true, erros: errorMessages });
			}

    }

		async get(request: Request, response: Response) {
			let{params} = request;
			let {id} = params;

			let comment = await this.commentRepository.get(id);

			if(!comment){
				return response.status(404).json({error:true,msg:'Comment Not Found!'});
			}

			return response.status(200).json({ error: false, comment });

		}



		async remove(request: Request, response: Response) {
			let{params} = request;
			let {id} = params;

			let comment = await this.commentRepository.get(id);

			if(!comment){
				return response.status(404).json({error:true,msg:'Comment Not Found!'});
			}

			try{
				await this.commentRepository.delete(id);
				return response.status(200).json({error:false,msg:`Comment Removido com Sucesso!`});

			}catch(err){
				return response.status(400).json({error:true,msg:`Erro ao Remover Comment! ${err.message}`});
			}

		}

}
