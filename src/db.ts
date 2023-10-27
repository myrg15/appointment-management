import "reflect-metadata";
import { DataSource } from "typeorm"
import { CreateTableCustomers1698440506494 } from "./migration/1698440506494-create-table-customers";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "appointment-management",
    entities: [],
    migrations: [CreateTableCustomers1698440506494
    
    ],
    synchronize: false,
    logging: false,
  })
  