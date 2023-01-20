import {TravelRegistrationEntity} from "@application/entities/travel-registration-entity";
import {QuotationEntity} from "@application/entities/quotation-entity";


export namespace Quotation {
    export type Params = QuotationEntity
    export type Result = QuotationEntity
}


export interface QuotationInterface {
    addRegister: (travelRegistration: Quotation.Params) => Promise<Quotation.Result>
}

