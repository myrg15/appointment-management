import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, OneToOne } from "typeorm"
import {Appointments} from "./appointments-table"
import { Portfolio } from "./portfolio-table";

@Entity({name: "tatooArtist"})
export class TattooArtist extends BaseEntity {

  @PrimaryGeneratedColumn()
  tattooArtist_id!: number

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

 @OneToMany(() => Appointments, appointments => appointments.tattooArtist)
  appointments!: Appointments[];

  @OneToOne(() => Portfolio, portfolio => portfolio.tattooArtistPortfolio)
  portfolio!: Portfolio[];
}