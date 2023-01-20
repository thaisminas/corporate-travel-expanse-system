import 'reflect-metadata';
import {bodyParser, contentType, cors} from "./infra/http/middlewares";
import {Container} from "inversify";
import {EmployeePrismaRepository} from "../src/infra/database/repository/employee-prisma-repository";
import {InversifyExpressServer, TYPE} from 'inversify-express-utils';
import './infra/http/controller/employee-controller'
import TYPES from "./infra/http/types/ioc.types";
import {EmployeeService} from "../src/application/services/employee-service";

const container = new Container({
    autoBindInjectable: false,
    defaultScope: 'Transient',
});

container.bind<EmployeePrismaRepository>(TYPES.EmployeePrismaRepository)
    .to(EmployeePrismaRepository);

container.bind<EmployeeService>(TYPES.EmployeeService)
    .to(EmployeeService);


let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser)
    app.use(cors)
    app.use(contentType)
});

const serverInstance = server.build();
serverInstance.listen(3002, () => {
    console.log('Server running at http://localhost:3002');
});


