import {EmployeeModel} from "../../models/employee-model";

export interface EmployeeRecord {
    add: (employee: EmployeeRecord.Params) => Promise<EmployeeRecord.Result>
}

export namespace EmployeeRecord {
    export type Params = EmployeeModel
    export type Result = EmployeeModel
}
