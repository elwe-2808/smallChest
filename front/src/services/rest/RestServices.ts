import axios, {Axios} from 'axios'
import type {AxiosResponse} from 'axios'
export interface RestServices <X> {
    get<T>(url: string): Promise<T>;
    get(url: string): Promise<X>;
    post(url: string, data: X): Promise<X>;
    post<T>(url: string, data: X): Promise<T>;
}

export class RestServicesImpl<X> implements RestServices<X>{
    public get(url: string): Promise<X> {
        return axios.get(url)
            .then(res => {
                return res.data
            })
    }
    public post(url: string, data: X): Promise<X> {
        return axios.post(url, data)
            .then(this.extractData)
    }

    private extractData(res: AxiosResponse<any>){
        return res.data
    }
}
