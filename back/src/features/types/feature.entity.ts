import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { Snippet } from '../../snippets/entities/snippet.entity';

@Entity()
@ObjectType()
export class Feature {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  title: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  guide: string;

  @OneToMany(() => Snippet, (snippet) => snippet.feature, {
    cascade: ['insert', 'update'],
  })
  snippets: Snippet[];
}
