import {EmployeeRecord} from "@/domain/use-cases/employee-record";
import {DbEmployeeRecord} from "../../../data/use-cases/db-employee-record";


export const makeDbEmployeeRecord = (): EmployeeRecord => {
    return new DbEmployeeRecord()
}
