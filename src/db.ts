import "reflect-metadata";
import { DataSource } from "typeorm"
import { Customers } from "./models/customers";
import { Tattooartist } from "./models/tattooartist";
import { Desingallery } from "./models/desingallery";
import { Appointments } from "./models/appointments";
import { Customers1698955498866 } from "./migration/1698955498866-customers";
import { Tattooartist1698957123029 } from "./migration/1698957123029-Tattooartist";
import { Appointments1698957908615 } from "./migration/1698957908615-Appointments";
import { ForeignkeyCustomers1698960482379 } from "./migration/1698960482379-Foreignkey_Customers";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456789",
  database: "tattoo",
  entities: [Customers, Tattooartist,
  Desingallery, Appointments],
  migrations: [Customers1698955498866, Tattooartist1698957123029,
    Appointments1698957908615, ForeignkeyCustomers1698960482379,
    ],
  synchronize: false,
  logging: false,
})
