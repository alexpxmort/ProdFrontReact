import { ILike, getRepository } from 'typeorm';
import IDbRepository from './IDbRepository';
import { Classe } from '../../app/models/Classe';


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

	 async save(data: object):Promise<Classe> {
	 return this.getConnect().save(data);
	}

	update(id: string, data: object) {
	  return this.getConnect().update(id,data);
	}

	delete(id: string) {
	  return this.getConnect().delete(id);
	}

	get(id: string):Classe {
	  return  this.getConnect().findOne(id,{
			relations:['comments'],
		});

	}

	findAll():Classe[] {
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
	      date_created: 'DESC',
	    },
	    take: limit,
	    skip: offset,
	  });
	}
}
