export default interface IDbRepository{
	save(data:object);
	update(id:string, data:object);
	delete(id:string);
	get(id:string);
	findAll();
	paginate(keyword:any, limit:number, offset:number);
}
