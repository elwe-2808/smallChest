import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {FeaturesService} from './features.service'
import {FeaturesController} from './features.controller'
import {FeaturesResolver} from './features.resolver'
import {Feature} from './types/feature.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Feature])],
	exports: [TypeOrmModule],
	providers: [FeaturesService, FeaturesResolver],
	controllers: [FeaturesController]
})
export class FeaturesModule {}