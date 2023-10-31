import { MigrationInterface, QueryRunner, TableForeignKey} from "typeorm"

export class ForeignKeycustomers1698783159032 implements MigrationInterface {

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
        const table = await queryRunner.getTable("customers");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("id") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("customers", foreignKey);
        }
    }

    }