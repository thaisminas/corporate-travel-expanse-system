import {EmployeeRecordInterface} from "@application/domain/interface/employee-record-interface";
import {HttpResponse} from "../../../../src/utils/protocols";


export class EmployeeRecordSpy implements EmployeeRecordInterface {

    params: EmployeeRecord.Params
    result: HttpResponse

    add(employee: EmployeeRecord.Params): Promise<EmployeeRecord.Result> {
        return Promise.resolve(undefined);
    }
}
