import express from "express" 
const router = express.Router() 
import db from "../database/createConnection.js"
import bcrypt from "bcrypt"
import {sendMail} from "../utils/emailSender.js"
import readCustomer from "../database/customers/readCustomer.js"


router.get("/api/customers", async (req, res) => {
    const customers = await readCustomer.readAll()
    res.send(customers)
})
router.post("/api/customers/login", async (req, res) => {
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

router.post("/api/customers/", async(req, res) => {
    const {email} = req.body
    const {firstName} = req.body
    const {lastName} = req.body
    const {pw} = req.body
    const test = {firstName, lastName, email, pw}
    console.log(test)
    const customer = await db.get(`SELECT * FROM customers WHERE email = ?`, email)
    if(customer) {
        console.log("Email used")
        res.send({errorMsg: "emailUsed"})
    } else {
        console.log("Registering user..")
        const hashedPassword = await bcrypt.hash(pw, 10) // Maybe don't add a literal here?
        db.run("INSERT INTO customers (firstName, lastName, email, hashedPassword) VALUES (?, ?, ? ,?)", [firstName, lastName, email, hashedPassword])
        // ^error handle by making max length on input in frontend?
        // send email
        sendMail(email, firstName)
        res.send({})
    }
    
})
export default router