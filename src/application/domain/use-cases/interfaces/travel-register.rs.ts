import {TravelRegistrationEntity} from "@application/domain/entities/travel-registration-entity";


export interface TravelRegistration {
    addRegister: (travelRegistration: TravelRegister.Params) => Promise<TravelRegister.Result>
}

export namespace TravelRegister {
    export type Params = TravelRegistrationEntity
    export type Result = TravelRegistrationEntity
}
