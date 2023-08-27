import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Features} from './features.entity'
import {Repository} from 'typeorm'
import {RelationUtils} from '../utils/relationUtils'

@Injectable()
export class FeaturesService {
	constructor(
		@InjectRepository(Features) private featureRepository: Repository<Features>
	) {}

	findAll(): Promise<Features[]> {
		return this.featureRepository.find(RelationUtils.load<Features>('_snippets'));
	}
}