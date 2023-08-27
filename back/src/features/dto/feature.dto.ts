import {Column, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Snippet} from '../../snippets/entities/snippet.entity'
import {Features} from '../features.entity'
import {SnippetDto} from '../../snippets/dto/snippet.dto'

export class FeatureDto {

	constructor(e: Features) {
		this.id = e.id;
		this.title = e.title;
		this.description = e.description;
		this.snippets = e.snippets.map(val => new SnippetDto(val));
		this.guide = e.guide;
	}
	id: number;
	title: string;
	description: string;
	guide: string;
	snippets: SnippetDto[]
}