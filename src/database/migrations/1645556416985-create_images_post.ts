import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImagesPost1645556416985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'images_post',
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
          name: 'post_id',
          type: 'integer'
        }

        ],
        foreignKeys: [
          {
            name: 'imagepost',
            columnNames: ['post_id'],
            referencedTableName: 'post',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images_post');
    }

}
