import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ObjectID, ObjectIdColumn } from 'typeorm';
import { Comment } from './Comment';


@Entity("classes")
export class Classe {

    @ObjectIdColumn({name:'id',type:'uuid'})
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    video: string;

		@Column({default:0})
    public totalComments: number;

		@Column({type:'date'})
    data_init: Date;

		@Column({type:'date'})
    data_end: Date;

		@CreateDateColumn({name:'created_at'})
    public created_at: Date;

    @UpdateDateColumn({name:'updated_at'})
    public updated_at: Date;

}
