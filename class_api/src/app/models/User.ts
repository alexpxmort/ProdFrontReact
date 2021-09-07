import {Entity, ObjectID,ObjectIdColumn,PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity("users")
export class User {

    @ObjectIdColumn({name:'id',type:'uuid'})
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

		@CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

}
