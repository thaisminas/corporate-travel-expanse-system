import {container} from "tsyringe";
import {Controller, HttpResponse} from "@utils/protocols";
import {EmployeeRecordUseCase} from "../../../application/domain/use-cases/employee-record-use-case";
import {badRequest, ok, serverError} from "../../../utils/helpers";
import {EmployeeModel} from "@application/domain/models/employee-model";

export class EmployeeRecordController implements Controller{
    async handle(request: EmployeeRecordController.Request): Promise<HttpResponse> {
        try {
            const data = await request
            const employeeRecord = container.resolve(EmployeeRecordUseCase)
            const result = await employeeRecord.add(data)
            return result ? ok(result) : badRequest('Record already exist in database')
        } catch (error) {
            return serverError(error)
        }
    }

}


export namespace EmployeeRecordController {
    export type Request = EmployeeModel
}
