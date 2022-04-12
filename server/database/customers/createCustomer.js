import bcrypt from "bcrypt"
import db from "../createConnection.js"

const saltRounds = 10
const textInputPassword = "hunde123"
let hashedPassword = ""
let firstName = "Jimmy2"
let lastName = "Losang2"
let email = "jimmytnlosang@gmail.com"

async function hashPassword() {
    hashedPassword = await bcrypt.hash(textInputPassword, saltRounds)
    db.run("INSERT INTO customers (firstName, lastName, email, hashedPassword) VALUES (?, ?, ? ,?)", firstName, lastName, email, hashedPassword)
}

hashPassword()

/* ######## TODO ############
export functionality so it can be called from routers or endpoints
*/