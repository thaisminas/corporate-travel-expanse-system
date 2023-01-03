import {Controller} from "@/presentation/protocols/controller";
import {EmployeeRecordController} from "../../../presentation/controllers/employee-record-controller";
import {makeDbEmployeeRecord} from "../../factories/use-cases/makeDbEmployeeRecord";

export const makeEmployeeRecordController = (): Controller => {
    let controller: EmployeeRecordController;
    controller = new EmployeeRecordController(makeDbEmployeeRecord());
    return controller
}
