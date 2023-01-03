import {EmployeeRecord} from "@/domain/use-cases/employee-record";


export class DbEmployeeRecord implements EmployeeRecord{
    add(employee: EmployeeRecord.Params): Promise<EmployeeRecord.Result> {
        console.log('Passei por aqui de novo')
        return Promise.resolve(undefined);
    }
}
