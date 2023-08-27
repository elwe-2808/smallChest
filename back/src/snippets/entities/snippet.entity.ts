import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Features} from '../../features/features.entity'

@Entity()
export class Snippet {

	@PrimaryGeneratedColumn()
	id: string

	@Column()
	title: string

	@Column()
	description: string

	@Column()
	code: string

	@Column()
	language: string

	@ManyToOne(() => Features, feature => feature.snippets)
	feature: Features
}
