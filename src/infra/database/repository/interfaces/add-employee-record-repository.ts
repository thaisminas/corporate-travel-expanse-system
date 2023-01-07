import {EmployeeRecord} from "@application/domain/use-cases/interfaces/employee-record";

export interface AddEmployeeRecordRepository {
    add: (data: AddEmployeeRecordRepository.Params) => Promise<AddEmployeeRecordRepository.Result>
    find: (data: AddEmployeeRecordRepository.Params) => Promise<AddEmployeeRecordRepository.Result>
}


export namespace AddEmployeeRecordRepository {
    export type Params = EmployeeRecord.Params
    export type Result = void
}
