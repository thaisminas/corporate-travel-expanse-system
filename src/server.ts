import express, {Router} from "express";
import env from './main/config/env';

const app = express()
const router = Router


app.use('/api', router)

app.listen(env.port, ()=> console.log(`Server is running ${env.port}`))
