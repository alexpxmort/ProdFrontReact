import { ILike } from 'typeorm';
import IDbRepository from './IDbRepository';

export default class CompanyRepository implements IDbRepository {
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

	update(id: number, data: object) {
	  throw new Error('Method not implemented.');
	}

	delete(id: number) {
	  throw new Error('Method not implemented.');
	}

	get(id: number) {
	  return this.getConnect().find({
	    where: {
	      id,
	    },
	  })
	}

	find() {
	  return this.getConnect().find();
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
