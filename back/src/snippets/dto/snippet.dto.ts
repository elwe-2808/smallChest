import {Column, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Features} from '../../features/features.entity'
import {Snippet} from '../entities/snippet.entity'

export class SnippetDto {
	constructor(e: Snippet) {
		this.id = e.id;
		this.title = e.title;
		this.description = e.description;
		this.code = e.code;
		this.language = e.language;
	}
	id: string
	title: string
	description: string
	code: string
	language: string
}