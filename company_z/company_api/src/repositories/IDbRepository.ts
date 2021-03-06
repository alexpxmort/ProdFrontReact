export default interface IDbRepository{
	save(data:object);
	update(id:number, data:object);
	delete(id:number);
	get(id:number);
	findAll();
	paginate(keyword:any, limit:number, offset:number);
}
