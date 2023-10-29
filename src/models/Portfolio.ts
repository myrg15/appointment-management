import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import {TattooArtist} from "./TattooArtist"

@Entity("portfolio")
export class Portfolio extends BaseEntity {

  @PrimaryGeneratedColumn()
  portfolio_id!: number

  @Column()
  name!: string

  @Column()
  description!: string

  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date

 @OneToMany(() => TattooArtist, (TattooArtist) => TattooArtist.portfolio)
  tattooArtist!: TattooArtist[];

  tattooArtistPortfolio!: Portfolio[];

}