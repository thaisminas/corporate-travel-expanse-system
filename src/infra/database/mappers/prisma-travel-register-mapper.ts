
import {TravelRegister} from "@application/interfaces/travel-register-interface";


export class PrismaTravelRegisterMapper {
    static toPrisma(data: TravelRegister.Params) {
        return {
            employeeId: data.employeeId,
            quotationId: data.quotationId,
            departureDate: data.departureDate,
            arrivalDate: data.arrivalDate,
            oneWay: data.oneWay,
            inbound: data.inbound,
            returnRoute: data.returnRoute,
            destinationCity: data.destinationCity,
            departureCity: data.departureCity,
            advanceAmount: data.advanceAmount
        }
    }
}
