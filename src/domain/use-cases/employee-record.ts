import {EmployeeModel} from "../models/employee-model";

export interface EmployeeRecord {
    add: (employee: EmployeeRecord.Params) => Promise<EmployeeRecord.Result>
}

export namespace EmployeeRecord {
    export type Params = {
        name: string
        email: string
        phone: string
        street: string
        district: string
        city: string
        state: string
        zipCode: string
        office: string
        sector: string
        managerName: string
        agency: number
        account:   number
        createdAt: Date
    }

    export type Result = EmployeeModel
}
