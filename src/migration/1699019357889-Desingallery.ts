import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Desingallery1699019357889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "desingallery",
                columns: [
                    {
                        name: "desingallery_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "date",
                        type: "date",
                    },
                    {
                        name: "image_url",
                        type: "varchar",
                        length: "255",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "200"
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
                        name: "tattooartist_id",
                        type: "int",
                    },

                ],
            }),
            true
        );
        await queryRunner.query(`ALTER TABLE desingallery ADD CONSTRAINT fk_desin_tattoo FOREIGN KEY (tattooartist_id) REFERENCES tattooartist(id) ON DELETE CASCADE;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("desingallery");
    }

}
