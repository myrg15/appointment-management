import "reflect-metadata";
import { DataSource } from "typeorm"
import { Customers1698688974386 } from "./migration/1698688974386-customers";
import { TattooArtist1698690788118 } from "./migration/1698690788118-tattooArtist";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "appointmentmanagement",
    entities: [],
    migrations: [Customers1698688974386, TattooArtist1698690788118  

    ],
    synchronize: false,
    logging: false,
  })
  