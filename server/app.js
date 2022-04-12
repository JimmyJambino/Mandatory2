import express from "express"
import session from "express-session"
import path from "path"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
//import db from "./database/createConnection.js"
import readCustomer from "./database/customers/readCustomer.js"
//app.use(express.static("public")) not using it yet.
import cors from "cors"
import { ok } from "assert"
app.use(cors())

app.use(session({
    secret: 'keyboard cat',
    resave: false, 
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.get("/", (req, res) => {
    req.session.isAuthenticated = false // if statement? 
    // Actually we can just use it in an html script tag?
})
//app.use(express.static(path.resolve("../client/public"))) acts as the new root, used to get access to public in client?

app.get("/customers", async (req, res) => {
    const customers = await readCustomer.readAll()
    res.send(customers)
})

app.post("/customers", (req, res) => {
    console.log(req.body)
    res.send({})
})

app.listen(PORT, () => {
    console.log("Express server connection established.")
})