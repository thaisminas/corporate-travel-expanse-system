// @ts-nocheck
import {prisma} from "../prisma.client";
import {PrismaEmployeeMapper} from "../mappers/prisma-employee-mapper";
import {injectable} from "inversify";
import {Employee} from "@application/interfaces/employee-interface";
import {RepositoryInterface} from "@infra/database/repository/interface/repository-interface";

@injectable()
export class EmployeePrismaRepository implements RepositoryInterface{
    async add(data: Employee.Params): Promise<Employee.Result> {
        const raw = PrismaEmployeeMapper.toPrisma(data)
        return await prisma.employee.create({
            data: raw
        });
    }

    async find(data: Employee.Params): Promise<Employee.Result> {
        return await prisma.employee.findFirst({
            where: {
                name: data.name
            }
        });
    }

    delete(data: Employee.Params): Promise<Employee.Result> {
        return Promise.resolve(undefined);
    }

    findAll(data: Employee.Params): Promise<Employee.Result> {
        return Promise.resolve(undefined);
    }

    update(data: Employee.Params): Promise<Employee.Result> {
        return Promise.resolve(undefined);
    }

}
