import { ILike, ObjectID } from 'typeorm';
import IDbRepository from './IDbRepository';
import { User } from '../../app/models/User';

export default class UserRepository implements IDbRepository  {
	private connect;

	private model;

	constructor(connect, model) {
	  this.model = model;
	  this.connect = connect;
	}

	private getConnect() {
	  return this.connect(this.model)
	}

	 save(data: object) {
	 return this.getConnect().save(data);
	}

	update(id: ObjectID, data: object) {
	  return this.getConnect().update(id,data);
	}

	delete(id: ObjectID) {
	  return this.getConnect().delete(id);
	}

	get(id: ObjectID) {
	  return this.getConnect().findOne(id);
	}

	async findByEmail(email:string):Promise<User> {
	  return await  this.getConnect().findOne({
			email
		});
	}

	findAll() {
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
