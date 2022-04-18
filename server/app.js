import express from "express"
import session from "express-session"
import path from "path"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
import readCustomer from "./database/customers/readCustomer.js"
import readBeer from "./database/beers/readBeer.js"
//app.use(express.static("public")) not using it yet.
import cors from "cors"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import customerRouter from "./routers/customerRouter.js"
import beerRouter from "./routers/beerRouter.js"
app.use(helmet())
const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use("/auth", authLimiter)
// app.use("/auth", router) only for those necessary, like beer?
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

//app.use(express.static(path.resolve("../client/public"))) acts as the new root, used to get access to public in client?

app.get("/customers", async (req, res) => {
    const customers = await readCustomer.readAll()
    res.send(customers)
})

// app.get("/beers", async (req, res) => {
//     const beers = await readBeer.readAll()
//     res.send(beers)
// })

app.get("/loggedIn", (req, res) => {
    if(req.session.user) {
        res.send({data: true})
    } else {
        res.send({data: false})
    }
})

app.listen(PORT, () => {
    console.log("Express server connection established.")
})