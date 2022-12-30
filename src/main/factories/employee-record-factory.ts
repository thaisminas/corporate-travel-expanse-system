import {Controller} from "@/presentation/protocols/controller";
import {EmployeeRecordController} from "@/presentation/controllers/employee-record-controller";
import {EmployeeRecord} from "@/domain/use-cases/employee-record";

export const makeEmployeeRecordController = (): Controller => {
    let controller: EmployeeRecordController;
    // @ts-ignore
    controller = new EmployeeRecordController(EmployeeRecord);
    return controller
}
