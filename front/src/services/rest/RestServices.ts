import axios from 'axios'
export interface RestServices <X> {
    get<T>(url: string): Promise<T>;
    get(url: string): Promise<X>;
}

export class RestServicesImpl<X> implements RestServices<X>{
    get(url: string): Promise<X> {
        return axios.get(url)
            .then(res => {
                return res.data
            })
    }
}
