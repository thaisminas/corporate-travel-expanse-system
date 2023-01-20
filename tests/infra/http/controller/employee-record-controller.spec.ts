// // @ts-nocheck
// import 'reflect-metadata';
// import {EmployeeController} from '../../../../src/infra/http/controller/employee-record-controller';
// import {faker} from "@faker-js/faker";
// import { created } from "../../../../src/utils/helpers/http-helper";
// import {AddEmployeeRecordRepository} from "@infra/database/repository/interface/add-employee-record-repository";
// import {AddEmployeeRecordRepositorySpy} from "./mocks/add-employee-record-repository-spy";
// import request from 'supertest';
// import {Request} from "express";
//
// let employeeRecordController: EmployeeController
// let addEmployeeRecordRepository: AddEmployeeRecordRepository
// employeeRecordController = new EmployeeController()
//
//
// const mockRequest = () => {
//     const req = {
//         body: {
//             name: faker.name.fullName(),
//             email: faker.internet.email(),
//             phone: faker.phone.number(),
//             street: faker.address.street(),
//             district: 'centro',
//             city: faker.address.city(),
//             state: faker.address.state(),
//             zipCode: faker.address.zipCode(),
//             office: 'gerente comercial',
//             sector: 'comercial',
//             manager_name: faker.name.fullName(),
//             agency: 4567,
//             account: 2345
//         }
//     }
//     jest.fn().mockReturnValue(req)
//     req.params = jest.fn().mockReturnValue(req)
//     return req
// }
//
// const mockResponse = () => {
//     const res = {
//         statusCode: 201,
//         body: 'record created'
//     }
//     jest.fn().mockReturnValue(res)
//     jest.fn().mockReturnValue(res)
//     return res
// }
//
// type SutTypes = {
//     sut: EmployeeController
//     addEmployeeRecordRepositorySpy: AddEmployeeRecordRepositorySpy
// }
//
// const makeSut = (): SutTypes => {
//     const addEmployeeRecordRepositorySpy = new AddEmployeeRecordRepositorySpy()
//     return {
//         addEmployeeRecordRepositorySpy
//     }
// }
//
// describe('Employee record controller', () => {
//
//     const { app } = require('../../src/app').default;
//
//     it('Should return 201 created employee record', async () => {
//         const add = {
//             name: faker.name.fullName(),
//             email: faker.internet.email(),
//             phone: faker.phone.number(),
//             street: faker.address.street(),
//             district: 'centro',
//             city: faker.address.city(),
//             state: faker.address.state(),
//             zipCode: faker.address.zipCode(),
//             office: 'gerente comercial',
//             sector: 'comercial',
//             manager_name: faker.name.fullName(),
//             agency: 4567,
//             account: 2345
//         }
//         // jest.spyOn(addEmployeeRecordRepositorySpy, 'add').mockResolvedValue(add)
//
//         addEmployeeRecordRepository.add = jest.fn().mockImplementation(() => Promise.resolve(add))
//
//         const body = mockRequest()
//
//         // await addEmployeeRecordRepository.add(request.body)
//         // const result = await employeeRecordController.handle(request)
//
//         await request(app)
//             .post('/')
//             .send(body)
//             .expect(201, { body: 'record created' });
//
//
//         // expect(result).toEqual({
//         //     statusCode: 201,
//         //     body: 'record created'
//         // })
//     })
//
//     it('Should return 201 created employee record', async () => {
//         const request = mockRequest()
//         const result = await employeeRecordController.handle(request)
//         expect(result).toEqual(await created())
//
//     })
// })
