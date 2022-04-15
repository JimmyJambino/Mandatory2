import db from "../createConnection.js"

async function readAll() {
    const result = await db.all('SELECT * FROM orders') // all is for all cases, where db.get is for first instance.
    console.log(result)
    return result
}

readAll()

// Orders should not be read from the orders table, but the order_beers table.

async function readOrders() {
    const result = await db.all()
}