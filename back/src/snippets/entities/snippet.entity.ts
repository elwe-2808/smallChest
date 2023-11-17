import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Feature } from '../../features/types/feature.entity';

@Entity()
@ObjectType()
export class Snippet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id?: string;

  @Column()
  @Field({ nullable: true })
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  code: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  language: string;

  @ManyToOne(() => Feature, (feature) => feature.snippets)
  @Field((type) => Feature)
  feature?: Feature;
}
