import "reflect-metadata";
import { DataSource } from "typeorm"
import { CreateCustomersTable1698600757456 } from "./migration/1698600757456-create-customers-table";
import { CreateTattooArtistTable1698602205062 } from "./migration/1698602205062-create-tattooArtist-table";
import { CreateAppointmentsTable1698603037296 } from "./migration/1698603037296-create-appointments-table";
import { CreateTablePortfolio1698604551288 } from "./migration/1698604551288-create-table-portfolio";
import { Customers } from "./entity/customers";
import { TattooArtist } from "./entity/tattooArtist-table";
import { Appointments } from "./entity/appointments-table";
import { Portfolio } from "./entity/portfolio-table";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "appointmentmanagement",
    entities: [Customers, TattooArtist, Appointments, Portfolio],
    migrations: [CreateCustomersTable1698600757456,
      CreateTattooArtistTable1698602205062,
      CreateAppointmentsTable1698603037296,
      CreateTablePortfolio1698604551288 
    ],
    synchronize: false,
    logging: false,
  })
  