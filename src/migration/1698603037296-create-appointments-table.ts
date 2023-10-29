import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAppointmentsTable1698603037296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "tatoo",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "piercing",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",                        
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"                 
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["customer_id"],
                        referencedTableName: "customers",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["tattooArtist_id"],
                        referencedTableName: "tattooArtist",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }

                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }
}   
