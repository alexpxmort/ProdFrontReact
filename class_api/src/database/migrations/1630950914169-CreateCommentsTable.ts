import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCommentsTable1630950914169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table(
				{
				 name:'comments',
				 columns:[
						{
								name:'id',
								type:'uuid',
								isPrimary:true,
								generationStrategy:'uuid',
								default:'uuid_generate_v4()'
						} ,
						{
						 name:'comment',
						 type:'varchar',
						 },
						{
						 name:'created_at',
						 type:'timestamp',
						 default:'current_timestamp'
						 },
						 {
								 name:'id_class',
								 type:'uuid',
								 isNullable:true,
								 default:null
						 }
				 ]
				}
		 ))

		 await queryRunner.createForeignKey(
			 'comments',
			 new TableForeignKey(
				 {
					 columnNames:['id_class'],
					 referencedTableName:'classes',
					 referencedColumnNames:['id']
				 }
			 )
		 )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('comments','id_class');
			await queryRunner.dropTable('comments');
    }

}
