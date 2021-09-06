import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/jwt';

interface TokenPayload{
	id:string;
	iat:number;
	exp:number;
}

export default function authMidleWare(
	req:Request,resp:Response,next:NextFunction
){
	const {authorization} = req.headers;

	if(!authorization){
		return resp.sendStatus(401);
	}

	const token = authorization.replace('Bearer','').trim();

	try{
		const data = jwt.verify(token,TOKEN_SECRET);

		const {id} = data as TokenPayload;

		req.userId = id;
	}catch(err){
		return resp.sendStatus(401);
	}
}
