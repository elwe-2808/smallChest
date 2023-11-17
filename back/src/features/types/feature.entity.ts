import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@Entity()
export class Feature {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  title: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  guide: string;
}
