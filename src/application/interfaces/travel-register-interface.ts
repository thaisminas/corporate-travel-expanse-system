import {TravelRegistrationEntity} from "@application/entities/travel-registration-entity";


export namespace TravelRegister {
    export type Params = TravelRegistrationEntity
    export type Result = TravelRegistrationEntity
}


export interface TravelRegistrationInterface {
    addRegister: (travelRegistration: TravelRegister.Params) => Promise<TravelRegister.Result>
}

