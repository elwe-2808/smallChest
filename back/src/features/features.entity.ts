import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Snippet} from '../snippets/entities/snippet.entity'
import {Field, Int, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Features {
	@PrimaryGeneratedColumn()
	@Field(type => Int)
	id: number;
	@Column()
	@Field({nullable: true})
	title: string;
	@Column()
	@Field({nullable: true})
	description: string;
	@Column()
	@Field({nullable: true})
	guide: string;

	@OneToMany(() => Snippet, snippet => snippet.feature)
	@Field(type => [Snippet])
	_snippets: Snippet[];

	get snippets(){
		return this._snippets ?? [];
	}

	set snippets(val: Snippet[]){
		this._snippets = val;
	}
}