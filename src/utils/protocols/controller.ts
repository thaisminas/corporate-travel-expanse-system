import {HttpResponse} from "@utils/protocols/http";
import {Response} from "express";


export interface Controller<T = any>{
    handle: (request: T) => Promise<HttpResponse>
}
