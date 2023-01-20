// @ts-nocheck
import {prisma} from "../prisma.client";
import {injectable} from "inversify";
import {TravelArrangement} from "@application/interfaces/travel-arrangement-entity";
import {PrismaTravelArrangementMapper} from "@infra/database/mappers/prisma-travel-arrangement-mapper";
import {RepositoryInterface} from "@infra/database/repository/interface/repository-interface";

@injectable()
export class TravelArrangementPrismaRepository implements RepositoryInterface{
    add(data: TravelArrangement.Params): Promise<TravelArrangement.Result> {
        const raw = PrismaTravelArrangementMapper.toPrisma(data)
        return await prisma.travelArrangement.create({
            data: raw
        });
    }

    delete(data: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    find(data: TravelArrangement.Params): Promise<TravelArrangement.Result> {
        return await prisma.travelArrangement.findFirst({
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
