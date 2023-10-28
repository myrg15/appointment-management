import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import {Appointments} from "./Appointments"


@Entity({name: "customers"})
export class Customers extends BaseEntity {

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

 @OneToMany(() => Appointments, (appointments) => appointments.customers)
  appointments!: Appointments[];

  customersAppointments!: Appointments[];

}