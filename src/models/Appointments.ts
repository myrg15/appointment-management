import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import {Customers} from "./Customers"
import { TattooArtist } from "./TattooArtist"


@Entity("appointments")
export class Appointments extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  tattoo!: boolean

  @Column()
  piercing!: boolean
 
  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date

  @ManyToOne(() => Customers)
  @JoinTable({
     name: "customer_appointments",
     joinColumn: {
        name: "appointments_id",
        referencedColumnName: "id",
     }
    })
    customersAppointments!: Appointments[];
 @ManyToOne(() => TattooArtist)
 @JoinTable({
  name: "tatooArtist_appointments",
  joinColumn:{
    name: "appointments_id",
    referencedColumnName:"id"
  }
 })
 tattooArtistAppointments!: Appointments[];
 
}