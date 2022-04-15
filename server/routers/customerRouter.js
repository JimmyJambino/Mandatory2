import express from "express" // import {Router} from "express"
const router = express.Router() // = Router()
import db from "../database/createConnection.js"
import bcrypt from "bcrypt"

router.post("/api/customers", async (req, res) => {
    const {email} = req.body
    const {password} = req.body
    
    console.log(email, password)
    const customer = await db.get(`SELECT * FROM customers WHERE email = ?`, email)
    if(customer) {
        if(await bcrypt.compare(password, customer.hashedPassword)) {
            req.session.customer = {
                id: customer.id
            }
            res.send({customer: customer.id})
        } else {
            console.log("Wrong password") // TODO: send user to other page or use notification
            res.send({errorMsg: "password"})
        }
    } else {
        console.log("Doesn't exist") // TODO: send user to other page or use notification
        res.send({})
    }
})

// TODO: this was a test, configure for proper use later
router.get("/api/customers", async (req, res) => {

    res.send(await db.get(`SELECT * FROM customers`))
})

router.get("/api/customers/logout", (req, res) => {
    req.session.destroy()
    res.send({})
})
export default router