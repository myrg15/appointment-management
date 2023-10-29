import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import { Customers } from "./customers"
import { TattooArtist } from "./tattooArtist-table"

@Entity("appointments")
export class Appointments extends BaseEntity {

  @PrimaryGeneratedColumn()
  appointments_id!: number
  
  @Column()
  date!: Date

  @Column()
  tattoo!: boolean

  @Column()
  piercing!: boolean

  @Column()
  created_at!: Date

  @Column()
  updated_at!: Date

  @ManyToOne(() => Customers, customers => customers.appointments)
  customers!: Customers [];

  @ManyToOne(() => TattooArtist, TattooArtist => TattooArtist.appointments)
  tattooArtist!: TattooArtist [];
  
  }