import {Router} from "express";
import {adapteRouter} from "../addapter/express-router-adapter";
import {makeEmployeeRecordController} from "../factories/controllers/employee-record-factory";


export default (router: Router): void => {
    router.post('/employee', adapteRouter(makeEmployeeRecordController()))

    console.log('passei aqui')

    router.post('/teste', (req, res) => {
        res.json({ ok: 'ok' });
    })

}
