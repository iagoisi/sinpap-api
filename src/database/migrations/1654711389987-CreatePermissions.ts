import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissions1654711389987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'permissions',
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
      await queryRunner.dropTable('permissions');
    }

}
