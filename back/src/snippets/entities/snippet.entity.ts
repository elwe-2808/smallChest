import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Features} from '../../features/features.entity'
import {Field, Int, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Snippet {

	@PrimaryGeneratedColumn()
	@Field(type => Int)
	id: string

	@Column()
	@Field({nullable: true})
	title: string

	@Column()
	@Field({nullable: true})
	description: string

	@Column()
	@Field({nullable: true})
	code: string

	@Column()
	@Field({nullable: true})
	language: string

	@ManyToOne(() => Features, feature => feature.snippets)
	@Field(type => Features)
	feature: Features
}
