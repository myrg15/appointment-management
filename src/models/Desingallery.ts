import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm"
import { Tattooartist} from "./Tattooartist";

@Entity("desingallery")

export class Desingallery extends BaseEntity{

    @PrimaryGeneratedColumn()
    desingallery_id!: number
  
    @Column()
    name!: string
  
    @Column()
    date!: Date
    
    @Column()
    image_url!: string
   
    @Column()
    description!: string
  
    @Column()
    created_at!: Date
    
    @Column()
    updated_at!: Date
  
    @Column()
    tattooartist_id!: number
  
   @ManyToOne(() => Tattooartist, (tattooartist) => tattooartist.desingallery)
   @JoinColumn({name: "tattooartist_id"})
   tattooartist!:Tattooartist;
}

