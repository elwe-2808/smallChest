import {Controller, Get} from '@nestjs/common'
import {FeaturesService} from './features.service'
import {Features} from './features.entity'
import {FeatureDto} from './dto/feature.dto'

@Controller('features')
export class FeaturesController {

	constructor(private readonly featureService: FeaturesService) {}

	@Get()
	async findAll() {
		return this.map(await this.featureService.findAll());
	}

	map(entities: Features[]) {
		if(!entities) return []
		return entities.map(val => new FeatureDto(val));
	}
}