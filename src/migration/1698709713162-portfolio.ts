import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Portfolio1698709713162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
                new Table({
                    name: "portfolio",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        },
                        {
                            name: "name",
                            type: "varchar",                      
                            length: "100"
                        },
                        {
                            name: "image_url",
                            type: "varchar",
                            length:"255",
                            isUnique:true
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
                        
                    ],
                }),
                true
            );
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("portfolio");
        }
    }   
    