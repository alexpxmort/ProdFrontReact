import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClassesTable1630950672386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table(
				{
				 name:'classes',
				 columns:[
						{
								name:'id',
								type:'uuid',
								isPrimary:true,
								generationStrategy:'uuid',
								default:'uuid_generate_v4()'
						} ,
						{
						 name:'name',
						 type:'varchar',
						 },
						{
						 name:'description',
						 type:'varchar',
						 },
						 {
							name:'video',
							type:'varchar',
							},
						 {
								 name:'data_init',
								 type:'date'
						 },
						 {
							name:'data_end',
							type:'date'
						},
						{
							name:'total_comments',
							type:'int',
							default:0,
						},
						{
							name:'date_created',
							type:'date',
							default:'current_timestamp'

						},
					{
					 name:'data_updated',
					 type:'date',
					 default:'current_timestamp'

				 },
				 ]
				}
		 ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('classes');
    }

}
