import "reflect-metadata";
import { DataSource } from "typeorm"
import "dotenv/config"

import { Customers } from "./models/Customers";
import { Tattooartist } from "./models/Tattooartist";
import { Appointment} from "./models/Appointment";
import { Desingallery } from "./models/Desingallery";
import { MigracionDesingallery } from "./migration/MigracionDesingallery";
import { MigracionAppointments } from "./migration/MigracionAppointments";
import { MigracionTattooartist } from "./migration/MigracionTattooartist";
import { MigracionCustomers } from "./migration/MigracionCustomers";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456789",
  database: "tattoo",
  entities: [Customers, Tattooartist, Appointment, Desingallery ],
  migrations: [MigracionDesingallery, MigracionAppointments, MigracionTattooartist,MigracionCustomers
    ],
  synchronize: false,
  logging: false,
})
