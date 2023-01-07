import {TravelRegistrationModel} from "@application/domain/models/travel-registration-model";


export interface TravelRegistration {
    addRegister: (travelRegistration: TravelRegister.Params) => Promise<TravelRegister.Result>
}

export namespace TravelRegister {
    export type Params = TravelRegistrationModel
    export type Result = TravelRegistrationModel
}
