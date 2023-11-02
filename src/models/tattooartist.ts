import { BaseEntity, Entity, Column, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, OneToOne } from "typeorm"
/*import { Appointments } from "./appointments"
import { Desingallery } from "./desingallery";*/

@Entity("tatooartist")
export class Tattooartist extends BaseEntity {

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

   /* @Column()
    appointments_id!: number

    @Column()
    desingallery_id!: number*/

    //@OneToMany(() => Appointments, (appointments) => appointments.tattooartist)
    //appointments!: Appointments[];

    //@OneToMany(() => Desingallery, (desingallery) => desingallery.tattooartist)
    //desingallery!: Desingallery[];

}
