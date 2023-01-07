import 'reflect-metadata';
import express from 'express'
// import app from './main/config/app'
import {bodyParser, contentType, cors} from "./infra/http/middlewares";
import {routes} from "./infra/http/routes/routes-controllers";

import "./infra/container"

const app = express()
app.use(bodyParser)
app.use(cors)
app.use(contentType)

app.use(routes);

// app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
//     if(err instanceof AppError){
//         return response.status(err.statusCode).json({ message: err.message })
//     };
//
//     return response.status(500).json({
//         status: "error",
//         message: `Internal server error - ${err.message}`
//     });
// })

app.listen(3002, () => console.log('Server running at http://localhost:3002'))
