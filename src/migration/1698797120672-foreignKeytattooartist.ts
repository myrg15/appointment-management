import { MigrationInterface, QueryRunner, TableForeignKey,  } from "typeorm"

export class ForeignKeytattooartist1698797120672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
            await queryRunner.createForeignKey("tattooartist", new TableForeignKey({
                columnNames: ["appointments_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "appointments",
                onDelete: "CASCADE"
    
            }));
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropForeignKey("tattooartist", "tattooartist_id");
        }
    }