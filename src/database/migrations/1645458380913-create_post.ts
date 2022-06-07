import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPost1645458380913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'post',
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
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'text',
                    type: 'text',
                },
                {
                    name: 'createdDate',
                    type: 'date',
                  },
                  {
                    name: 'updatedDate',
                    type: 'date',
                  },
                  {
                      name: 'link',
                      type: 'varchar',
                  }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('post');
    }

}
