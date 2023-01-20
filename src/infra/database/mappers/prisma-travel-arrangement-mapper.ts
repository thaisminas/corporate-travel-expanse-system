
import {TravelArrangement} from "@application/interfaces/travel-arrangement-entity";



export class PrismaTravelArrangementMapper {
    static toPrisma(data: TravelArrangement.Params) {
        return {
            travelRegistrationId: data.travelRegistrationId,
            status: data.status,
            otherExpenses: data.otherExpenses,
            foodExpenses: data.foodExpenses,
            totalValue: data.totalValue,
            valueReturn: data.valueReturn,
            amountRefunded: data.amountRefunded,
        }
    }
}
