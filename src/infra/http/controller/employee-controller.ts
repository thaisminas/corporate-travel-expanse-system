// @ts-nocheck
import {Controller, HttpResponse} from "@utils/protocols";
import {badRequest, created, serverError} from "../../../utils/helpers";
import {
    controller,
    httpPost,
} from 'inversify-express-utils';
import TYPES from "../types/ioc.types";
import {inject} from "inversify";
import {Request} from "express";
import {EmployeeService} from '../../../application/services/employee-service';


@controller('/employee')
export class EmployeeController implements Controller{
    @inject(TYPES.EmployeeService) private employeeRecord: EmployeeService

    @httpPost('/')
    async handle(request: Request): Promise<HttpResponse> {
        try {
            const data = await request.body
            const result = await this.employeeRecord.add(data)
            return result ? created() : badRequest('Record already exist in database')
        } catch (error) {
            return serverError(error)
        }
    }
}

