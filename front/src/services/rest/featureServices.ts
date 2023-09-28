import Feature from '@/components/Feature.vue'
import {RestServicesImpl} from '@/services/rest/RestServices'

export class FeatureServices extends RestServicesImpl<Feature>{
    async findAll(){
        console.log(await this.get("api/features"))
    }
}
export function useFeatureService(){
    return new FeatureServices();
}
