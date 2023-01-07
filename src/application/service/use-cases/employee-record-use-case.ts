// @ts-nocheck
import {EmployeeRecord} from "../../domain/use-cases/employee-record";
import {AddEmployeeRecordRepository} from "../interfaces/add-employee-record-repository";
import {EmployeePrismaRepository} from "../../../infra/database/repository/employee-prisma-repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class EmployeeRecordUseCase implements EmployeeRecord{
    constructor(
        @inject("EmployeePrismaRepository")
        private addEmployeeRecordRepository : AddEmployeeRecordRepository) {
    }

    async add(employee: EmployeeRecord.Params): Promise<EmployeeRecord.Result> {
        const employeeAlreadyExist = await this.addEmployeeRecordRepository.find(employee)
        let result = false

        if(employeeAlreadyExist){
            return result;
        }

        return await this.addEmployeeRecordRepository.add(employee)
    }
}
