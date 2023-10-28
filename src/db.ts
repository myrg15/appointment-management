import "reflect-metadata";
import { DataSource } from "typeorm"
import { CreateTableCustomers1698440506494 } from "./migration/1698440506494-create-table-customers";
import { Customers } from "./models/Customers";
import { CreateTableTattooArtist1698444564824  } from "./migration/1698444564824-create-table-tattoo-artist";
import { TattooArtist } from "./models/TattooArtist";
import { CreateTableAppointments1698444994460 } from "./migration/1698444994460-create-table-appointments";
import { Appointments } from "./models/Appointments";
import { CreateTablePortfolio1698447058763 } from "./migration/1698447058763-create-table-portfolio";
import { Portfolio } from "./models/Portfolio";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "appointment-management",
    entities: [Customers, TattooArtist, Appointments, Portfolio],
    migrations: [CreateTableCustomers1698440506494, CreateTableTattooArtist1698444564824,
      CreateTableAppointments1698444994460, CreateTablePortfolio1698447058763
    ],
    synchronize: false,
    logging: false,
  })
  