import {TravelRegistrationEntity} from "@application/entities/travel-registration-entity";


export class QuotationEntity {
    id: number;

    travelRegistrationId: TravelRegistrationEntity;

    carRental: number;

    airfare: number;

    hotel: number;

    busTransport: number;

    createdAt: Date;
}
