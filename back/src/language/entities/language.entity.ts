import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {ObjectType} from '@nestjs/graphql'
import {Category} from '../../category/entities/category.entity'

@Entity()
@ObjectType()
export class Language {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
  @OneToMany(() => Category, (category) => category.language)
  categories: Category[];
}
