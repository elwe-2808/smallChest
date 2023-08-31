import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {of} from "rxjs";
import {Features} from "./features.entity";
import {FeaturesService} from "./features.service";

@Resolver(of => Features)
export class FeaturesResolver {
    constructor(
       private featureService: FeaturesService
    ) {}

    @Query(returns => [Features])
    async features(@Args('id', {type: () => Int}) id: number) {
        return this.featureService.findAll()
    }
}