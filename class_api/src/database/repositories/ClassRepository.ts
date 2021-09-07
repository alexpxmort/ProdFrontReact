import { ILike, getRepository, ObjectID } from 'typeorm';
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

	update(id: ObjectID, data: object) {
	  return this.getConnect().update({'_id': id}, data);
	}

	async updateTotal(id: ObjectID, total:number):Promise<any> {
	  return this.getConnect().update({'_id': id}, {"totalComments": total});
	}


	delete(id: ObjectID) {
	  return this.getConnect().delete(id);
	}

	  get(id: ObjectID):Promise<any> {
	  return   this.getConnect().findOne({
			where:{ _id: id}
		})
	}

	findAll():Classe[] {
	  return this.getConnect().find({
			relations:['comments'],
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
