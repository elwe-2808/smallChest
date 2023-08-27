import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Snippet} from '../snippets/entities/snippet.entity'

@Entity()
export class Features {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	description: string;
	@Column()
	guide: string;

	@OneToMany(() => Snippet, snippet => snippet.feature)
	_snippets: Snippet[];

	get snippets(){
		return this._snippets ?? [];
	}

	set snippets(val: Snippet[]){
		this._snippets = val;
	}
}