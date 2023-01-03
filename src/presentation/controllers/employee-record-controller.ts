import {Controller} from "@/presentation/protocols/controller";
import {EmployeeRecord} from "@/domain/use-cases/employee-record";
import {HttpResponse} from "@/presentation/protocols/http";
import { noContent } from "../helpers";


export class EmployeeRecordController implements Controller {
    constructor(private readonly employeeRecord: EmployeeRecord) {
    }

    handle(request: EmployeeRecordController.Request): HttpResponse {
        const result = this.employeeRecord.add(null)
        return noContent()
    }

}

export namespace EmployeeRecordController {
    export type Request = {
        name: string
        email: string
        password: string
        passwordConfirmation: string
    }
}
