import {TravelRegistrationEntity} from "@application/entities/travel-registration-entity";

export class TravelArrangementEntity {
    id: number;

    travelRegistrationId: TravelRegistrationEntity;

    status: string;

    otherExpenses: number;

    foodExpenses: number;

    totalValue: number;

    valueReturn: number;

    amountRefunded: number;

    createdAt: Date;

    updetedAt: Date;

}
