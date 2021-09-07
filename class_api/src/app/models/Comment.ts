import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,BeforeInsert, JoinColumn, ManyToOne, getRepository} from "typeorm";
import { Classe } from './Classe';

@Entity("comments")
export class Comment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    comment: string;


		@ManyToOne(type => Classe, classe => classe.id)
		@JoinColumn({name:'id_class',referencedColumnName:'id'})
    classe: Classe;

		@CreateDateColumn()
    public created_at: Date;

	
}
