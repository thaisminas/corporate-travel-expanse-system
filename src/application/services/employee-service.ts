// @ts-nocheck
import "reflect-metadata";
import {Employee, EmployeeInterface} from "../interfaces/employee-interface";
import { inject, injectable } from "inversify";
import TYPES from "../../infra/http/types/ioc.types";
import {EmployeePrismaRepository} from "../../infra/database/repository/employee-prisma-repository";

@injectable()
export class EmployeeService implements EmployeeInterface{
    @inject(TYPES.EmployeePrismaRepository)
    private addEmployeeRecordRepository : EmployeePrismaRepository

    async add(employee: Employee.Params): Promise<Employee.Result> {
        const employeeAlreadyExist = await this.addEmployeeRecordRepository.find(employee)
        let result = false

        if(employeeAlreadyExist){
            return result;
        }

        return await this.addEmployeeRecordRepository.add(employee)
    }
}
