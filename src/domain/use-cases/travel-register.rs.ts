import {EmployeeModel} from "@/domain/models/employee-model";
import {QuotationModel} from "@/domain/models/quotation-model";
import {TravelRegistrationModel} from "@/domain/models/travel-registration-model";


export interface TravelRegistration {
    addRegister: (travelRegistration: TravelRegister.Params) => Promise<TravelRegister.Result>
}

export namespace TravelRegister {
    export type Params = {
        employeeId : EmployeeModel
        quotationId: QuotationModel
        departureDate: Date
        arrivalDate: Date
        oneWay: string
        inbound: string
        returnRoute: string
        destinationCity: string
        departureCity: string
        advanceAmount: string
        createdAt: Date
    }

    export type Result = TravelRegistrationModel
}
