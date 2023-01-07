
import {QuotationEntity} from "@application/domain/entities/quotation-entity";


export type TravelRegistrationEntity = {
    id: number
    // employeeId: EmployeeModel
    quotationId: QuotationEntity
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
