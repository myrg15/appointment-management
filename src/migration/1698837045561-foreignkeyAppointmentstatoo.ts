import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class ForeignkeyAppointmentstatoo1698837045561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createForeignKey("appointments", new TableForeignKey({
                columnNames: ["tattooartist_id"],
                referencedColumnNames: ["tattooartist_id"],
                referencedTableName: "tattooartist",
                onDelete: "CASCADE"
    
            }));
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropForeignKey("appointments", "tattooartist_id");
        }
    }
    
    
    