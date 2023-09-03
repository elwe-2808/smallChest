import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {RelationUtils} from '../utils/relationUtils'
import {FeatureInput} from './types/feature.input'
import {Feature} from './types/feature.entity'

@Injectable()
export class FeaturesService {
	constructor(
		@InjectRepository(Feature) private featureRepository: Repository<Feature>
	) {}

	findAll(): Promise<Feature[]> {
		return this.featureRepository.find(RelationUtils.load<Feature>('snippets'));
	}

	findById(id: number): Promise<Feature> {
		return this.featureRepository.findOne({where: {id}, ...RelationUtils.load<Feature>('snippets')})
	}

	save(featureInput: FeatureInput){
		const feature: Feature = {
			title: featureInput.title,
			description: featureInput.description,
			guide: featureInput.guide,
			snippets: featureInput.snippets
		}
		return this.featureRepository.save(featureInput);
	}
}