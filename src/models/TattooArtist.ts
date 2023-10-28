import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, OneToOne } from "typeorm"
import {Appointments} from "./Appointments"
import { Portfolio } from "./Portfolio";


@Entity({name: "tatooArtist"})
export class TattooArtist extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  username!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  is_active!: boolean
  
  @Column()
  role!: string
  
  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date

 @OneToMany(() => Appointments, (appointments) => appointments.tattooArtist)
  appointments!: Appointments[];

  tattooArtistAppointments!: Appointments[];

  @OneToOne(() => Portfolio, (portfolio) => portfolio.tattooArtist)
  portfolio!: Portfolio[];

  tattooArtistPortfolio!: Portfolio[];


}






