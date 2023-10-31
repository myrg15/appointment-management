import "reflect-metadata";
import { DataSource } from "typeorm"
import { Customers1698688974386 } from "./migration/1698688974386-customers";
import { TattooArtist1698701600547 } from "./migration/1698701600547-tattooArtist";
import { Portfolio1698709713162 } from "./migration/1698709713162-portfolio";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "appointmentmanagement",
    entities: [],
    migrations: [Customers1698688974386, TattooArtist1698701600547,
      Portfolio1698709713162
    
    ],
    synchronize: false,
    logging: false,
  })
  