import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Feature } from '../../features/types/feature.entity';

@InputType()
export class SnippetInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  language: string;
}
