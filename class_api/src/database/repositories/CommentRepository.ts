import { ILike } from 'typeorm';
import IDbRepository from './IDbRepository';
import { Comment } from '../../app/models/Comment';

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

	update(id: string, data: object) {
	  return this.getConnect().update(id,data);
	}

	delete(id: string|number) {
	  return this.getConnect().delete(id);
	}

	get(id: string):Comment {
	  return this.getConnect().findOne(id);
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
