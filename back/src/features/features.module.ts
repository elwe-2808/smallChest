import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Features} from './features.entity'
import {FeaturesService} from './features.service'
import {FeaturesController} from './features.controller'
import {SnippetsController} from '../snippets/snippets.controller'
import {SnippetsService} from '../snippets/snippets.service'

@Module({
	imports: [TypeOrmModule.forFeature([Features])],
	exports: [TypeOrmModule],
	providers: [FeaturesService],
	controllers: [FeaturesController]
})
export class FeaturesModule {}