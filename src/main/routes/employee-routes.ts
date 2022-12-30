import {Router} from "express";
import {adapteRouter} from "@/main/addapter/express-router-adapter";
import {makeEmployeeRecordController} from "@/main/factories/employee-record-factory";


export default (router: Router): void => {
    router.get('/employee', adapteRouter(makeEmployeeRecordController()))
}
