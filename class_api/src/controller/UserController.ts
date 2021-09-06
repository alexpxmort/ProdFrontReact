import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { User } from "../app/models/User";
import UserRepository from '../database/repositories/UserRepository';



export class UserController {

    private userRepository = new UserRepository(getRepository,User);

    async getAll(request: Request, response: Response) {
        let users = await this.userRepository.findAll();

				return response.json(users);
    }


}
