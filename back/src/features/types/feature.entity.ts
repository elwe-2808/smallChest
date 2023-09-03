import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Snippet} from '../../snippets/entities/snippet.entity'

@Entity()
@ObjectType()
export class Feature {
	@PrimaryGeneratedColumn()
	@Field(type => Int)
	id?: number;
	@Column()
	@Field({nullable: true})
	title: string;
	@Column({nullable: true})
	@Field({nullable: true})
	description: string;
	@Column({nullable: true})
	@Field({nullable: true})
	guide: string;

	@OneToMany(() => Snippet, snippet => snippet.feature, {cascade: ['insert', 'update']})
	@Field(type => [Snippet])
	snippets: Snippet[];
}