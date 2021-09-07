import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
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
    public date_created: Date;

}
