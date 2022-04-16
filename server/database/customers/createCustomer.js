import bcrypt from "bcrypt"
import db from "../createConnection.js"

const saltRounds = 10
const textInputPassword = "hunde123"
let hashedPassword = ""
let firstName = "Jimmy2"
let lastName = "Losang2"
let email = "jimmytnlosang@gmail.come"

async function hashPassword() {
    hashedPassword = await bcrypt.hash(textInputPassword, saltRounds)
    db.run(`INSERT INTO customers (firstName, lastName, email, hashedPassword) VALUES (?, ?, ? ,?);`, [firstName, lastName, email, hashedPassword])
}
//await db.run(`INSERT INTO players (name) VALUES (?);`, [name]) // This sanitizes the value, which prevents sqlinjection.
hashPassword()

/* ######## TODO ############
export functionality so it can be called from routers or endpoints
*/