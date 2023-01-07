import {TravelRegistrationEntity} from "@application/domain/entities/travel-registration-entity";


export type QuotationEntity = {
    id: number
    travelRegistrationId: TravelRegistrationEntity
    carRental: number
    airfare: number
    hotel: number
    busTransport: number
    createdAt: Date
}
