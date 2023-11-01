import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm"
import { Customers } from "./customers"
import { Tattooartist } from "./tattooartist"

@Entity("appointments")
export class Appointments extends BaseEntity {

    @PrimaryGeneratedColumn()
    appointments_id!: number

    @Column()
    date!: Date

    @Column()
    sessions!: string

    @Column()
    availability!: boolean

    @Column()
    time!: string;

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date

    @Column()
    customer_id!: number

    @Column()
    tattooartist_id!: number

    @ManyToOne(() => Customers, (customers) => customers.appointments)
    @JoinColumn({ name: "customers_id" })
    customers!: Customers;

    @ManyToOne(() => Tattooartist, (tattooartist) => tattooartist.appointments_id)
    @JoinColumn({ name: "tattooartist_id" })
    tattooartist!: Tattooartist;

}