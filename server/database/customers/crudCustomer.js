import bcrypt from "bcrypt"
import db from "../createConnection.js"

const saltRounds = 10

export async function createCustomer(customer) {
    const firstName = customer.firstName
    const lastName = customer.lastName
    const email = customer.email
    const hashedPassword = await bcrypt.hash(customer.pw, saltRounds)
    db.run(`INSERT INTO customers (firstName, lastName, email, hashedPassword) VALUES (?, ?, ? ,?);`, [firstName, lastName, email, hashedPassword])
}

export function deleteCustomer(id) {
    db.run('DELETE FROM customers WHERE id=?', id)
}

export async function readAllCustomers() {
    const result = await db.all('SELECT * FROM customers') 
    return result
}

// Missing Update