import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable} from "typeorm"
import { Appointment } from "./Appointment";
import { Tattooartist } from "./Tattooartist";

@Entity("customers")
export class Customers extends BaseEntity {
    @PrimaryGeneratedColumn()
    customers_id!: number
  
    @Column()
    username!: string
  
    @Column()
    email!: string
  
    @Column()
    password!: string
  
    @Column()
    phone_number!: string
  
    @Column()
    is_active!: boolean
    
    @Column({ default: 'user' })
    role!: string
    
    @Column()
    created_at!: Date
    
    @Column()
    updated_at!: Date

   @OneToMany(() => Appointment, (appointment) => appointment.customers)
   customers!: Appointment[];
}
