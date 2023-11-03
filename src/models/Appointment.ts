import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm"
import { Customers } from "./Customers";
import { Tattooartist } from "./Tattooartist";


@Entity("appointments")
export class Appointment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    date!: Date
    
    @Column()
    sessions!: string
  
    @Column()
    availability!: boolean
  
    @Column()
    time!: string  
  
    @Column()
    created_at!: Date
  
    @Column()
    updated_at!: Date
    
    @Column()
    customers_id!: number
  
    @Column()
    tattooartist_id!: number
    
    @ManyToOne(() => Customers, (customers)=>customers.appointments)
    @JoinColumn({name: "customers_id"})
    customers!: Customers [];
  
    @ManyToOne(() => Tattooartist, (tattooartist) => tattooartist.appointments)
    @JoinColumn({name: "tattooartist_id"})
    tattooartist!: Tattooartist [];
   
}
