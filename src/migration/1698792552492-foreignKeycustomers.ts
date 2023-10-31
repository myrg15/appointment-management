import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class ForeignKeycustomers1698792552492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("customers", new TableForeignKey({
            columnNames: ["id"],
            referencedColumnNames: ["id"],
            referencedTableName: "appointments",
            onDelete: "CASCADE" 
        }));
    }
​
    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropForeignKey("customers", "id");
        }
    }

