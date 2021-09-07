import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,BeforeInsert, JoinColumn, ManyToOne, getRepository, ObjectID, ObjectIdColumn} from "typeorm";
import { Classe } from './Classe';

@Entity("comments")
export class Comment {

		@ObjectIdColumn({name:'id',type:'uuid'})
		id:ObjectID

    @Column()
    comment: string;

		@ObjectIdColumn({type:'uuid'})
		classe:ObjectID;

		@CreateDateColumn()
    public created_at: Date;


}
