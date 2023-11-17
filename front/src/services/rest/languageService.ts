import {RestServicesImpl} from '@/services/rest/RestServices'
import type {Language} from '@/classes/Language'
import type {Category} from '@/classes/Category'

export class LanguageService extends RestServicesImpl<Language>{
    async findAll(){
        return await super.get("/api/language")
    }

    async save(value: Category): Promise<Category>{
        return await super.post("/api/language", value)
    }
}
export function useLanguageService(){
    return new LanguageService();
}
