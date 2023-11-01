import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class ForeignkeyAppointmentscustomers1698837731408 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("appointments", new TableForeignKey({
            columnNames: ["customers_id"],
            referencedColumnNames: ["customers_id"],
            referencedTableName: "customers",
            onDelete: "CASCADE"

        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("appointments", "customers_id");
    }
}

