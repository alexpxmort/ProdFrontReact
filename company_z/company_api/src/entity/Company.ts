import {
  Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn,
} from 'typeorm';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column()
    cnpj:string;

    @Column()
    faturamento:string;

    @Column()
    sobre:string;

		@Column({
		  type: 'decimal', precision: 22, scale: 2, default: 0.00,
		})
		demanda:number;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
}
