import "reflect-metadata";
import { DataSource } from "typeorm"
import { Customers1698614954445 } from "./migration/1698614954445-customers";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "appointmentmanagement",
    entities: [],
    migrations: [Customers1698614954445 

    ],
    synchronize: false,
    logging: false,
  })
  