import { MigrationInterface, QueryRunner, TableForeignKey,  } from "typeorm"

export class ForeignKeytattooartdesing1698797745630 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createForeignKey("tattooartist", new TableForeignKey({
                columnNames: ["desingallery_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "desingallery",
                onDelete: "CASCADE"
    
            }));
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropForeignKey("tattooartist", "tattooartist_id");
        }
    }
    
    
    
    