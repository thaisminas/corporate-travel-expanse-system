// @ts-nocheck
import {prisma} from "../prisma.client";
import {PrismaEmployeeMapper} from "../mappers/prisma-employee-mapper";
import {AddEmployeeRecordRepository} from "@application/service/interfaces/add-employee-record-repository";


export class EmployeePrismaRepository implements AddEmployeeRecordRepository {
    async add(data: AddEmployeeRecordRepository.Params): Promise<AddEmployeeRecordRepository.Result> {
        const raw = PrismaEmployeeMapper.toPrisma(data)
        return await prisma.employee.create({
            data: raw
        });
    }

    async find(data: AddEmployeeRecordRepository.Params): Promise<AddEmployeeRecordRepository.Result> {
        return await prisma.employee.findFirst({
            where: {
                name: data.name
            }
        });
    }

}
