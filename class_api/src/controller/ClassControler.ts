import {getMongoRepository, getRepository} from "typeorm";
import {ObjectID} from 'mongodb';
import {Request, Response} from "express";
import { Classe } from "../app/models/Classe";
import { Comment } from "../app/models/Comment";
import '../database/connect';
import ClassRepository from '../database/repositories/ClassRepository';
import CommentsRepository from '../database/repositories/CommentRepository';
import { schemaClass } from '../validations/class.validation';
import * as Yup from 'yup';
import Pagination from '../utils/pagination.utils';
import { ClasseDTO } from '../dto/ClasseDTO';
import { User } from '../app/models/User';




export class ClassController {

    private classRepository = new ClassRepository(getMongoRepository,Classe);
		private commentsRepository = new CommentsRepository(getMongoRepository,Comment);



    async create(request: Request, response: Response) {
			let {body} = request;

			try {
				await schemaClass.validate(body, { abortEarly: false });
				try {

					if(!body.hasOwnProperty('totalComments')){
						body.totalComments = 0;
					}

					const classe = await this.classRepository.save(body);
					return response.status(200).json({ error: false, classe });
				} catch (err) {
					return response.status(400).json({ msg: `Erro ao criar classe: ${err.message}`, error: true });
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


		async update(request: Request, response: Response) {
			let {body,params} = request;

			try {
				await schemaClass.validate(body, { abortEarly: false });
				try {

					const {id} = params;

					let classe = await this.classRepository.get(new ObjectID(id));

					if(!classe){
						return response.status(404).json({error:true,msg:'Classe Not Found!'});
					}

					 classe = await this.classRepository.update(classe.id,body);
					return response.status(200).json({ error: false, msg:'Classe Atualizada com Sucesso!' });
				} catch (err) {
					return response.status(400).json({ msg: `Erro ao atualizar classe: ${err.message}`, error: true });
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

		 async getClasses (req:Request, res:Response) {
			const { query } = req;
			const { page, size } = query;
			const keyword = query.keyword || '';

			if(page && size){
				const paginator = new Pagination(page, size);

				try{
					const [result, total] = await this.classRepository.paginate(
						keyword, paginator.getLimit(), paginator.getOffSet(),
					)

					 let dataPaginated = paginator.getPaginationData(result, total);

					 return res.json(dataPaginated);
				}catch(err){
					return res.status(400).json({msg:`Classes erro ${err.message}`,error:true})
				}
			}

			let data =  await this.classRepository.findAll();


			return res.status(200).json({error:false,data});

		};

		async get(request: Request, response: Response) {
			let{params} = request;
			let {id} = params;

			let classe = await this.classRepository.get(new ObjectID(id));

			if(!classe){
				return response.status(404).json({error:true,msg:'Classe Not Found!'});
			}

			// classe.comments.sort((a:Comment,b:Comment) => {
			// 	return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
			// });
			// classe.comments = classe.comments.slice(0,3);

			return response.status(200).json({ error: false, classe });

		}



		async remove(request: Request, response: Response) {
			let{params} = request;
			let {id} = params;

			let classe = await this.classRepository.get(new ObjectID(id));

			if(!classe){
				return response.status(404).json({error:true,msg:'Classe Not Found!'});
			}

			try{
				await this.classRepository.delete(new ObjectID(id));
				return response.status(200).json({error:false,msg:`Classe Removida com Sucesso!`});

			}catch(err){
				return response.status(400).json({error:true,msg:`Erro ao Remover Classe! ${err.message}`});
			}

		}

}
