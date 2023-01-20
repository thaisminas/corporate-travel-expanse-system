import {IsDate, IsEmail, IsInt, IsNotEmpty, IsPhoneNumber} from "class-validator";

export class EmployeeEntity {
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phone: string;

    street: string;

    district: string;

    city: string;

    state: string;

    zipCode: string;

    office: string;

    sector: string;

    manager_name: string;

    @IsInt()
    agency: number;

    @IsInt()
    account: number;

    @IsDate()
    createdAt: Date;

}
