import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Appointments1698779878607 implements MigrationInterface {

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
                        name: "date",
                        type: "date",
                    },
                    {
                        name: "sessions",
                        type: "enum",
                        enum: ["tattoo", "piercing"]
                    },

                    {
                        name: "availability",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "time",
                        type: "enum",
                        enum: ["09:00", "12:00", "15:00", "18:00"]
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
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }
}
