import {QuotationModel} from "@application/domain/models/quotation-model";


export type TravelRegistrationModel = {
    id: number
    // employeeId: EmployeeModel
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
