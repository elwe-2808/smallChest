import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Language } from '../../language/entities/language.entity';
import {ObjectType} from '@nestjs/graphql'

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
  @OneToOne(() => Language)
  @JoinColumn()
  language: Language;
}
