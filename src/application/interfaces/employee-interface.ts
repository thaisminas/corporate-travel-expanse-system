import {EmployeeEntity} from "../entities/employee-entity";

export namespace Employee {
    export type Params = EmployeeEntity
    export type Result = EmployeeEntity
}

export interface EmployeeInterface {
    add: (employee: Employee.Params) => Promise<Employee.Result>
}


