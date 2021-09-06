import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Classe } from "../app/models/Classe";
import '../database/connect';
import ClassRepository from '../database/repositories/CommentRepository';
import { schemaClass } from '../validations/class.validation';
import * as Yup from 'yup';


export class ClassController {

    private classRepository = new ClassRepository(getRepository,Classe);

    async create(request: Request, response: Response) {
			let {body} = request;

			try {
				await schemaClass.validate(body, { abortEarly: false });
				try {

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

		async get(request: Request, response: Response) {
			let{params} = request;
			let {id} = params;

			let classe = await this.classRepository.get(id);

			if(!classe){
				return response.status(404).json({error:true,msg:'Classe Not Found!'});
			}

			return response.status(200).json({ error: false, classe });

		}



		async remove(request: Request, response: Response) {
			let{params} = request;
			let {id} = params;

			let classe = await this.classRepository.get(id);

			if(!classe){
				return response.status(404).json({error:true,msg:'Classe Not Found!'});
			}

			try{
				await this.classRepository.delete(id);
				return response.status(200).json({error:false,msg:`Classe Removida com Sucesso!`});

			}catch(err){
				return response.status(400).json({error:true,msg:`Erro ao Remover Classe! ${err.message}`});
			}

		}

}
