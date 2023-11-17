import {RestServicesImpl} from '@/services/rest/RestServices'
import type {Language} from '@/classes/Language'

export class LanguageService extends RestServicesImpl<Language>{
    async findAll(){
        console.log(await super.get("/api/features"))
    }

    async save(value: Language): Promise<Language>{
        console.log('post')
        return await super.post("/api/language", value)
    }
}
export function useLanguageService(){
    return new LanguageService();
}
