import {HttpResponse} from "@/presentation/protocols/https";

export interface Controller<T = any>{
    handle: (request: T) => Promise<HttpResponse>
}
