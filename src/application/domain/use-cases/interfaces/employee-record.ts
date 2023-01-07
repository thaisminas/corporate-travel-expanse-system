import {EmployeeEntity} from "../../entities/employee-entity";

export interface EmployeeRecord {
    add: (employee: EmployeeRecord.Params) => Promise<EmployeeRecord.Result>
}

export namespace EmployeeRecord {
    export type Params = EmployeeEntity
    export type Result = EmployeeEntity
}
