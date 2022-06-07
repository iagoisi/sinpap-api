import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImagesBlog1652291738524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images_blog',
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
                  name: 'path',
                  type: 'varchar',
                },
                {
                  name: 'blog_id',
                  type: 'integer'
                }
        
                ],
                foreignKeys: [
                  {
                    name: 'imageblog',
                    columnNames: ['blog_id'],
                    referencedTableName: 'blog',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                  }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images_blog');

    }

}
