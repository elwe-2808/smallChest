import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql'
import {FeaturesService} from "./features.service";
import {BaseResolver} from '../generic/resolver/BaseResolver'
import {FeatureInput} from './types/feature.input'
import {Feature} from './types/feature.entity'

@Resolver(of => Feature)
export class FeaturesResolver extends BaseResolver(Feature){
    constructor(
       private featureService: FeaturesService
    ) {
        super(featureService)
    }

    @Query(returns => Feature, {nullable: true})
    async getFeature(@Args('id', {type: () => Int}) id: number) {
        return this.featureService.findById(id)
    }

    @Mutation(returns => Feature)
    async addFeature(@Args('input') featureInput: FeatureInput){
        return this.featureService.save(featureInput)
    }
}