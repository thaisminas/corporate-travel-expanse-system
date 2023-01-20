import {TravelArrangementEntity} from "@application/entities/travel-arrangement-entity";

export namespace TravelArrangement {
    export type Params = TravelArrangementEntity
    export type Result = TravelArrangementEntity
}


export interface TravelArrangementInterface {
    addRegister: (travelArrangement: TravelArrangement.Params) => Promise<TravelArrangement.Result>
}

