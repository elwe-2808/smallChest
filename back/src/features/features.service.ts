import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Features} from './features.entity'
import {Repository} from 'typeorm'

@Injectable()
export class FeaturesService {
	constructor(
		@InjectRepository(Features) private featureRepository: Repository<Features>
	) {}

	findAll(): Promise<Features[]> {
		return this.featureRepository.find();
	}
}