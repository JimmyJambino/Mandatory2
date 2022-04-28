import express from "express"
import session from "express-session"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

import cors from "cors"
import helmet from "helmet"
import customerRouter from "./routers/customerRouter.js"
import beerRouter from "./routers/beerRouter.js"
app.use(helmet())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    rolling: false, 
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(cors())
app.use(customerRouter)
app.use(beerRouter)



app.listen(PORT, () => {
    console.log("Express server connection established.")
})