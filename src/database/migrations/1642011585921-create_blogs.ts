import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBlogs1642011585921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'blog',
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
              name: 'titulo',
              type: 'varchar',
            },
            {
              name: 'texto',
              type: 'text',
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('blog');
    }

}
