import {EmployeeEntity} from "@application/entities/employee-entity";
import {QuotationEntity} from "@application/entities/quotation-entity";


export class TravelRegistrationEntity {
    id: number;

    employeeId: EmployeeEntity;

    quotationId: QuotationEntity;

    departureDate: Date;

    arrivalDate: Date;

    oneWay: string;

    inbound: string;

    returnRoute: string;

    destinationCity: string;

    departureCity: string;

    advanceAmount: string;

    createdAt: Date;
}
