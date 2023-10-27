import "reflect-metadata";
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "T6X9G128MWC5",
    database: "appointment_management",
    entities: [],
    migrations: [],
    synchronize: false,
    logging: false,
  })
  