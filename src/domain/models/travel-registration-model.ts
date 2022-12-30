import {EmployeeModel} from "@/domain/enitities/models/employee-model";
import {QuotationModel} from "@/domain/enitities/models/quotation-model";

export type TravelRegistrationModel = {
    id: number
    employeeId: EmployeeModel
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
