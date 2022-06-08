import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRoles1654711995789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'roles',
            columns: [
                {
                  name: 'id',
                  type: 'integer',
                  unsigned: true,
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'descripition',
                  type: 'varchar',
                },
                {
                  name: 'createdDate',
                  type: 'date',
                },
                {
                  name: 'updatedDate',
                  type: 'date',
                }
            ]
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles');
    }

}
