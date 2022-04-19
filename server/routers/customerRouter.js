import express from "express" 
const router = express.Router() 
import db from "../database/createConnection.js"
import bcrypt from "bcrypt"
import {sendMail} from "../utils/emailSender.js"


router.post("/api/customers/login", async (req, res) => {
    const {email} = req.body
    const {password} = req.body
    
    const customer = await db.get(`SELECT * FROM customers WHERE email = ?`, email)
    if(customer) {
        if(await bcrypt.compare(password, customer.hashedPassword)) {
            res.send({customer: customer.id})
        } else {
            console.log("Wrong password") 
            res.send({errorMsg: "password"})
        }
    } else {
        console.log("Doesn't exist")
        res.send({})
    }
})

router.get("/api/customers/logout", (req, res) => {
    req.session.destroy()
    res.send({})
})

router.post("/api/customers/", async(req, res) => {
    const {email} = req.body
    const {firstName} = req.body
    const {lastName} = req.body
    const {pw} = req.body
    const customer = await db.get(`SELECT * FROM customers WHERE email = ?`, email)
    if(customer) {
        res.send({errorMsg: "emailUsed"})
    } else {
        const hashedPassword = await bcrypt.hash(pw, 10) // Maybe don't add a literal here?
        db.run("INSERT INTO customers (firstName, lastName, email, hashedPassword) VALUES (?, ?, ? ,?)", [firstName, lastName, email, hashedPassword])
        sendMail(email, firstName)
        res.send({})
    }
    
})
export default router