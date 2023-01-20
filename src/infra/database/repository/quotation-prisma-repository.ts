// @ts-nocheck
import {prisma} from "../prisma.client";
import {injectable} from "inversify";
import {PrismaQuotationMapper} from "@infra/database/mappers/prisma-quotation-mapper";
import {Quotation} from "@application/interfaces/quotation-interface";
import {Employee} from "@application/interfaces/employee-interface";
import {RepositoryInterface} from "@infra/database/repository/interface/repository-interface";

@injectable()
export class QuotationPrismaRepository implements RepositoryInterface{
    add(data: Quotation.Params): Promise<Quotation.Result> {
        const raw = PrismaQuotationMapper.toPrisma(data)
        return await prisma.registerQuotation.create({
            data: raw
        });
    }

    find(data: Employee.Params): Promise<Employee.Result> {
        return await prisma.registerQuotation.findFirst({
            where: {
                id: data.id
            }
        });
    }

    delete(data: Employee.Params): Promise<Employee.Result> {
        return Promise.resolve(undefined);
    }

    findAll(data: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    update(data: any): Promise<any> {
        return Promise.resolve(undefined);
    }


}
