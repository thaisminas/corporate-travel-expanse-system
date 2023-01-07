import { container } from 'tsyringe';
import {EmployeePrismaRepository} from "../database/repository/employee-prisma-repository";
import {AddEmployeeRecordRepository} from "@application/service/interfaces/add-employee-record-repository";


container.registerSingleton<AddEmployeeRecordRepository>(
    "EmployeePrismaRepository",
    EmployeePrismaRepository
)
