import db from "../createConnection.js"

export function createOrder(order) {
    db.run(`INSERT INTO orders (customerId) VALUES (?)`, order.customer)
    const orderId = await db.get(`SELECT * FROM orders ORDER BY id DESC`)
    order.beers.forEach(beer => {
        db.run(`INSERT INTO beer_orders VALUES (?, ?, ?)`, orderId, beer.id, beer.amount)
    })
}

export function deleteOrder(id) {
    db.run(`DELETE FROM beer_orders WHERE orderId = ?`, id)
    db.run(`DELETE FROM orders WHERE id = ?`, id)
}

export async function readAllOrders() {
    return await db.all('SELECT * FROM orders')
}
