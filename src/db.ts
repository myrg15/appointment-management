import "reflect-metadata";
import { DataSource } from "typeorm"
//import { Customers } from "./models/customers";
//import { Tattooartist } from "./models/tattooartist";
/*import { Desingallery } from "./models/desingallery";
import { Appointments } from "./models/appointments";*/


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456789",
  database: "tattoo",
  /*entities: [Customers, Tattooartist,
  Desingallery, Appointments],*/
  migrations: [
    ],
  synchronize: false,
  logging: false,
})
