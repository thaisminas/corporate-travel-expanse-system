import {TravelRegistrationModel} from "@/domain/enitities/models/travel-registration-model";

export type QuotationModel = {
    id: number
    travelRegistrationId: TravelRegistrationModel
    carRental: number
    airfare: number
    hotel: number
    busTransport: number
    createdAt: Date
}
