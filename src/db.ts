import "reflect-metadata";
import { DataSource } from "typeorm"
import { Customers1698776927865 } from "./migration/1698776927865-customers";
import { Tattooartist1698777364709 } from "./migration/1698777364709-tattooartist";
import { Desingallery1698779245751 } from "./migration/1698779245751-desingallery";
import { Appointments1698779878607 } from "./migration/1698779878607-appointments";
import { ForeignKeycustomers1698792552492 } from "./migration/1698792552492-foreignKeycustomers";
import { ForeignKeytattooartist1698797120672 } from "./migration/1698797120672-foreignKeytattooartist";
import { ForeignKeytattooartdesing1698797745630 } from "./migration/1698797745630-foreignKeytattooartdesing";
import { ForeignkeyDesings1698834575245 } from "./migration/1698834575245-foreignkeyDesings";
import { ForeignkeyAppointmentstatoo1698837045561 } from "./migration/1698837045561-foreignkeyAppointmentstatoo";
import { ForeignkeyAppointmentscustomers1698837731408 } from "./migration/1698837731408-foreignkeyAppointmentscustomers";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "tattoo",
    entities: [],
    migrations: [Customers1698776927865, Tattooartist1698777364709,
    Desingallery1698779245751, Appointments1698779878607, 
    ForeignKeycustomers1698792552492, ForeignKeytattooartist1698797120672,
    ForeignKeytattooartdesing1698797745630, ForeignkeyDesings1698834575245,
    ForeignkeyAppointmentstatoo1698837045561, ForeignkeyAppointmentscustomers1698837731408
    ],
    synchronize: false,
    logging: false,
  })
  