import "reflect-metadata";
import { DataSource } from "typeorm"
import "dotenv/config"
import { Customers1699046732304 } from "./migration/1699046732304-Customers";
import { Tattooartist1699047100282 } from "./migration/1699047100282-Tattooartist";
import { Appointments1699047323365 } from "./migration/1699047323365-Appointments";
import { Desingallery1699047703797 } from "./migration/1699047703797-Desingallery";
import { Customers } from "./models/Customers";
import { Tattooartist } from "./models/Tattooartist";
import { Appointment} from "./models/Appointment";
import { Desingallery } from "./models/Desingallery";


export const AppDataSource = new DataSource({
  type: "mysql",
  host:process.env.DB_HOST,
  port: 3306,
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  entities: [Customers, Tattooartist, Appointment, Desingallery ],
  migrations: [ Customers1699046732304, Tattooartist1699047100282,
    Appointments1699047323365, Desingallery1699047703797],
  synchronize: false,
  logging: false,
})
