import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { User } from "../app/models/User";
import UserRepository from '../database/repositories/UserRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/jwt';
import '../database/connect';


export class AuthController {

    private userRepository = new UserRepository(getRepository,User);

    async authenticate(request: Request, response: Response) {
        const {email,password} = request.body;

				const user = await this.userRepository.findByEmail(email);

				if(!user){
					return response.status(401).json({error:true,msg:'Unauthorized'});
				}

				const isValidPassword = await bcrypt.compare(password,user.password);

				if(!isValidPassword){
					return response.status(401).json({error:true,msg:'Unauthorized'});
				}

				const token = jwt.sign({
					id:user.id
				},TOKEN_SECRET,{expiresIn:'1d'});

				return response.json({
					error:false,
					user,
					token
				})
    }

}
