import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, OneToMany} from "typeorm";
import { Comment } from "./Comment";

@Entity("classes")
export class Classe {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    video: string;

		@Column({name:'total_comments'})
    public totalComments: number;

		@Column({type:'date'})
    data_init: Date;

		@OneToMany(type => Comment,comment => comment.classe)
		comments:Array<Comment>;

		@Column({type:'date'})
    data_end: Date;

		@CreateDateColumn({name:'created_at'})
    public created_at: Date;

    @UpdateDateColumn({name:'updated_at'})
    public updated_at: Date;

}
