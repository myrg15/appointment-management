import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class ForeignkeyDesings1698834575245 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey("desingallery", new TableForeignKey({
        columnNames: ["tattooartist_id"],
        referencedColumnNames: ["tattooartist_id"],
        referencedTableName: "tattooartist",
        onDelete: "CASCADE"

    }));
}

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("desingallery", "tattooartist_id");
}
}