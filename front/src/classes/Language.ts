import type {Category} from '@/classes/Category'

export interface Language{
    id?: number
    name: string
    categories?: Category
}
