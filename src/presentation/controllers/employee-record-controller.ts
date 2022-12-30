import {Controller} from "@/presentation/protocols/controller";
import {EmployeeRecord} from "@/domain/use-cases/employee-record";
import {HttpResponse} from "@/presentation/protocols/https";


export class EmployeeRecordController implements Controller {
    constructor(
        private readonly employeeRecord : EmployeeRecord
    ) {
    }

    handle(request: EmployeeRecordController.Request): Promise<HttpResponse> {
        console.log('Passei por aqui')
        return Promise.resolve(undefined);
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
