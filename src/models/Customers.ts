import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"


@Entity("customers")
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

 // @OneToMany(() => Appointments, (appointment) => appointment.customers
  //appointment!: Appointments[];

  //@ManyToMany(() => Task)
 //@JoinTable({
     //name: "task_user",
     //joinColumn: {
       // name: "user_id",
        //referencedColumnName: "id",
     //},
     //inverseJoinColumn: {
       // name: "task_id",
        //referencedColumnName: "id",
     //},
  //})
  //userTasks!: Task[];

}