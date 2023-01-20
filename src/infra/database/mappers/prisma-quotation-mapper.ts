import {Quotation} from "@application/interfaces/quotation-interface";

export class PrismaQuotationMapper {
    static toPrisma(data: Quotation.Params) {
        return {
            id: data.id,
            travelRegistrationId: data.travelRegistrationId,
            carRental: data.carRental,
            airfare: data.airfare,
            hotel: data.hotel,
            busTransport: data.busTransport,
            createdAt: data.createdAt,
        }
    }
}
