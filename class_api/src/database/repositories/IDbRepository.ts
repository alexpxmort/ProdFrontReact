import { ObjectID } from "typeorm";

export default interface IDbRepository{
	save(data:object);
	update(id:ObjectID, data:object);
	delete(id:ObjectID);
	get(id:ObjectID);
	findAll();
	paginate(keyword:any, limit:number, offset:number);
}
