import { InputType, } from '@nestjs/graphql'
import {SnippetInput} from '../../snippets/entities/snippet.input'

@InputType()
export class FeatureInput {
	title: string;
	description: string;
	guide: string;
    snippets: SnippetInput[];
}
