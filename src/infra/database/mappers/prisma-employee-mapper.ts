
import {Employee} from "@application/interfaces/employee-interface";


export class PrismaEmployeeMapper {
    static toPrisma(data: Employee.Params) {
        return {
            name: data.name,
            email: data.email,
            phone: data.phone,
            street: data.street,
            district: data.district,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
            office: data.office,
            sector: data.sector,
            manager_name: data.manager_name,
            agency: data.agency,
            account: data.account,
        }
    }
}
