import { ILike } from 'typeorm';
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

	 save(data: object):Classe {
	 return this.getConnect().save(data);
	}

	update(id: number, data: object) {
	  return this.getConnect().update(id,data);
	}

	delete(id: string) {
	  return this.getConnect().delete(id);
	}

	get(id: string):Classe {
		console.log(id);
	  return this.getConnect().findOne({
			where:{id}
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
	      created_at: 'DESC',
	    },
	    take: limit,
	    skip: offset,
	  });
	}
}
