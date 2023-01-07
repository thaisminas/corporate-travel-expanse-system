import {EmployeeRecordController} from "../controller/employee-record-controller";
import { Router } from "express";
import {adaptRoute} from "../../adapters/express-route-adapter";

const routes = Router();

const employeeRecordController = new EmployeeRecordController();

routes.post('/employee', adaptRoute(employeeRecordController))

export { routes }
