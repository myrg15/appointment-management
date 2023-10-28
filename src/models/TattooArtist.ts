import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import {Appointments} from "./Appointments"


@Entity("tattooArtist")
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

}






