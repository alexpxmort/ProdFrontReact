import { User } from "../../app/models/User";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import UserRepository from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';

export class CreatUserDefault1630958233229 implements MigrationInterface {
	private userRepository = new UserRepository(getRepository,User);
	private  DEFAULT_USER  = {name:'Alex',email:'lexpdigi@gmail.com',password:bcrypt.hashSync('123456',8)};

    public async up(queryRunner: QueryRunner): Promise<void> {
			await this.userRepository.save(this.DEFAULT_USER)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			let userFound = await this.userRepository.findByEmail(this.DEFAULT_USER.email);

			if(userFound){
				await this.userRepository.delete(userFound.id);
			}
    }

}
