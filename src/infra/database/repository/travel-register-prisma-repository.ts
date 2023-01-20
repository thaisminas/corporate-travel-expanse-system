// @ts-nocheck
import {prisma} from "../prisma.client";
import {injectable} from "inversify";
import {TravelRegister} from "@application/interfaces/travel-register-interface";
import {PrismaTravelRegisterMapper} from "@infra/database/mappers/prisma-travel-register-mapper";
import {RepositoryInterface} from "@infra/database/repository/interface/repository-interface";

@injectable()
export class TravelRegisterPrismaRepository implements RepositoryInterface{
    add(data: TravelRegister.Params): Promise<TravelRegister.Result> {
        const raw = PrismaTravelRegisterMapper.toPrisma(data)
        return await prisma.travelRegistration.create({
            data: raw
        });
    }

    delete(data: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    find(data: TravelRegister.Params): Promise<TravelRegister.Result> {
        return await prisma.travelRegistration.findFirst({
            where: {
                id: data.id
            }
        });
    }

    findAll(data: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    update(data: any): Promise<any> {
        return Promise.resolve(undefined);
    }


}
