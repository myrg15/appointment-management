import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Tattooartist1698777364709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tattooartist",
                columns: [
                    {
                        name: "tattooartist_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "username",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isUnique: true
                    },
                    {
                        name: "phone_number",
                        type: "varchar",
                        length: "20"
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "200"
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "role",
                        type: "enum",
                        enum: ["admin", "super_admin"],
                        default: '"admin"'
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
                    {
                        name: "appointments_id",
                        type: "int",
                    },
                    {
                        name: "desingallery_id",
                        type: "int",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tattooartist");
    }
}   