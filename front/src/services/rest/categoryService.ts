import {RestServicesImpl} from '@/services/rest/RestServices'
import type {Language} from '@/classes/Language'
import type {Category} from '@/classes/Category'

export class CategoryService extends RestServicesImpl<Category>{
    async findAll(){
        return await super.get("/api/category")
    }

    async save(value: Language): Promise<Language>{
        return await super.post("/api/category", value)
    }
}
export function useCategoryService(){
    return new CategoryService();
}
