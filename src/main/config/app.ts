import express, {Express} from "express";
import setupRoutes from './routes'
import setupMiddlewares from './middleware'


const app = express()
setupRoutes(app)
setupMiddlewares(app)
export default app
