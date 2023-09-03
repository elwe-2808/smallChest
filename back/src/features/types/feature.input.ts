import {Field, InputType, Int} from '@nestjs/graphql'
import {Snippet} from '../../snippets/entities/snippet.entity'
import {OneToMany} from 'typeorm'
import {SnippetInput} from '../../snippets/entities/snippet.input'

@InputType()
export class FeatureInput {
	@Field({nullable: true})
	title: string;
	@Field({nullable: false})
	description: string;
	@Field({nullable: true})
	guide: string;

	@Field(type => [SnippetInput], {nullable: 'itemsAndList'})
	snippets: SnippetInput[];
}