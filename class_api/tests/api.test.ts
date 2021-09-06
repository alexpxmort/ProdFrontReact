import supertest from 'supertest';
import path  from 'path';
import {app} from '../src/app/app';
import { createConnection,Connection } from 'typeorm';

let userTest:any;


let connection:Connection;
beforeEach(async ()=>{

	const entities = path.join(__dirname,'./../../src/app/models/*.ts');

	const mockConnection = await createConnection({
		"name":`${Math.random()}`,
		"type": "postgres",
		"host": "localhost",
		"port": 5432,
		"username": "postgres",
		"password": "lexpg",
		"database": "db_class",
		"synchronize": true,
		"logging": false,
		"entities": [entities]
	})

	connection = mockConnection;
});

afterAll(async ()=>{
	await connection.close();
})

describe ('Test Class API', () => {
	it('Should Login the User', async () => {
		let data = {
			email:'lexpdigi@gmail.com',
			password:'123456'
		}
		const res = await supertest(app).post('/users').send(data);
		let json = JSON.parse(res.text);
		userTest = json.user;
		expect(res.statusCode).toEqual(200);
		expect(json).toHaveProperty('token');
		expect(json.error).toBe(false);
	});


	it('Should FAIL Login the User', async () => {
		let data = {
			email:'lexpdigi@gmail.com',
			password:'1234567'
		}
		const res = await supertest(app).post('/users').send(data);
		let json = JSON.parse(res.text);
		userTest = json.user;
		expect(res.statusCode).toEqual(401);
	});



});
