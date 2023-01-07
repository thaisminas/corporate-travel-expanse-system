import {TravelRegistrationModel} from "@application/domain/models/travel-registration-model";


export type QuotationModel = {
    id: number
    travelRegistrationId: TravelRegistrationModel
    carRental: number
    airfare: number
    hotel: number
    busTransport: number
    createdAt: Date
}
