import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {ObjectType} from '@nestjs/graphql'

@Entity()
@ObjectType()
export class Language {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
}
