import supertest from 'supertest';
import path  from 'path';
import { Connection, createConnection } from 'typeorm';
import {app} from '../../src/app';

let connection:Connection;
let companyTest:any;

beforeEach(async ()=>{

	const entities = path.join(__dirname,'./../../src/entity/*.ts');

	const mockConnection = await createConnection({
		"name":`${Math.random()}`,
		"type": "postgres",
		"host": "localhost",
		"port": 5432,
		"username": "postgres",
		"password": "lexpg",
		"database": "db_company",
		"synchronize": true,
		"logging": false,
		"entities": [entities]
	})

	connection = mockConnection;
});

afterAll(async ()=>{
	await connection.close();
})

describe ('Test Company API', () => {
	it('Should GET All Companies', async () => {
		const res = await supertest(app).get('/companies');
		expect(res.statusCode).toEqual(200);
	});

	it('Should CREATE a NEW Company', async () => {
		let data = {
			nome: 'Nova Empresa',
			cnpj: '42518007000140',
			demanda: 100000005,
			faturamento: 'Até R$ 10 milhões;',
			sobre: 'Empresa do futuro',
		};

		const res = await supertest(app).post('/companies').send(data);
		expect(res.statusCode).toEqual(200);

		let json = JSON.parse(res.text);
		companyTest = json.company;

	});


	it('Should UPDATE an existing Company', async () => {
		let data = {
			nome: 'Nova Empresa Atualizada',
			cnpj: '42518007000140',
			demanda: 100000000,
			faturamento: 'Até R$ 10 milhões;',
			sobre: 'Empresa do futuro',
		};

		const res = await supertest(app).put(`/companies/${companyTest.id}`).send(data);
		expect(res.statusCode).toEqual(200);

		let json = JSON.parse(res.text);
		companyTest = json.company;

	});

	it('Should FAIL WITH WRONG Cnpj', async () => {
		let data = {
			nome: 'Nova Empresa Atualizada',
			cnpj: '1234567894561235',
			demanda: 100000000,
			faturamento: 'Até R$ 10 milhões;',
			sobre: 'Empresa do futuro',
		};

		const res = await supertest(app).put(`/companies/${companyTest.id}`).send(data);
		expect(res.statusCode).toEqual(400);
		let json = JSON.parse(res.text);
		expect(json.msg).toEqual('Cnpj Inválido!Insira um Cnpj válido');
	});

	it('Should GET All Companies BY KEYWORD', async () => {
		const res = await supertest(app).get(`/companies?page=0&size=10&keyword=${companyTest.nome}`);
		expect(res.statusCode).toEqual(200);
		let json = JSON.parse(res.text);
		expect(json.data.length).toBeGreaterThan(0);
	});


	it('Should GET Company By ID', async () => {
		const res = await supertest(app).get(`/companies/${companyTest.id}`);
		expect(res.statusCode).toEqual(200);
	});

	it('Should DELETE Company By ID', async () => {
		let id = 8;
		const res = await supertest(app).delete(`/companies/${companyTest.id}`);
		expect(res.statusCode).toEqual(200);
	});

});
