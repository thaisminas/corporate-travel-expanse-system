import {EmployeePrismaRepository} from "@infra/database/repository/employee-prisma-repository";

const TYPES = {
    EmployeePrismaRepository: Symbol.for("EmployeePrismaRepository"),
    EmployeeService: Symbol.for("EmployeeService"),
};

export default TYPES;
