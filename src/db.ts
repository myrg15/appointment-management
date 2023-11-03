import "reflect-metadata";
import { DataSource } from "typeorm"
import "dotenv/config"
import { Customers1699009318031 } from "./migration/1699009318031-Customers";
import { Tattooartist1699010133323 } from "./migration/1699010133323-Tattooartist";
import { Appointments1699010484103 } from "./migration/1699010484103-Appointments";
import { Desingallery1699019357889 } from "./migration/1699019357889-Desingallery";
import { Customers } from "./models/Customers";
import { Tattooartist } from "./models/Tattooartist";



export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456789",
  database: "tattoo",
  entities: [Customers, Tattooartist],
  migrations: [Customers1699009318031, Tattooartist1699010133323, 
    Appointments1699010484103, Desingallery1699019357889  
    ],
  synchronize: false,
  logging: false,
})
