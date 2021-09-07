import { getRepository, ILike } from 'typeorm';
import IDbRepository from './IDbRepository';
import { Comment } from '../../app/models/Comment';
import { getManager } from 'typeorm';
import { Classe } from '../../app/models/Classe';
import {ObjectID} from 'mongodb';



export default class ClassRepository implements IDbRepository  {
	private connect;

	private model;

	constructor(connect, model) {
	  this.model = model;
	  this.connect = connect;
	}

	private getConnect() {
	  return this.connect(this.model)
	}

	 save(data: object):Comment {
	 return this.getConnect().save(data);
	}

	update(id: ObjectID, data: object) {
	  return this.getConnect().update(id,data);
	}

	delete(id: ObjectID) {
	  return this.getConnect().delete(id);
	}

	get(id: ObjectID):Promise<any> {
	  return   this.getConnect().findOne({
			where:{ _id: id}
		})
	}

	findAll():Comment[] {
	  return this.getConnect().find({
			order: {
	      created_at: 'DESC',
	    },
		});
	}

	paginate(keyword:any, limit:number, offset:number) {
	  return this.getConnect().findAndCount({
	    where: { nome: ILike(`%${keyword}%`) },
	    order: {
	      created_at: 'DESC',
	    },
	    take: limit,
	    skip: offset,
	  });
	}
}
