import {  BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, OneToOne } from "typeorm"
import { Appointment } from "./Appointment";
import { Desingallery } from "./Desingallery";

@Entity("tattooartist")
export class Tattooartist extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
  
    @Column()
    username!: string
  
    @Column()
    email!: string
    
    @Column()
    phone_number!: string
    
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

 
    @Column()
    customers_id!: number
    
    @Column()
    desingallery_id!: number

   
    
    @OneToMany(() => Appointment, (appointment) => appointment.tattooartist)
    appointments!: Appointment[];

    
    @OneToMany(() => Desingallery, (desingallery) => desingallery.tattooartist)
    desingallerys!: Desingallery[];
}
