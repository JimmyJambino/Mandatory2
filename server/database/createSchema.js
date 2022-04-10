import db from "./createConnection.js"
/*
Developer note (aren't all notes for developers?) Tables to be created:
customer = {
    id,
    firstName,
    lastName,
    email,
    hashedPassword
}

beer = {
    id,
    amount, // In the beers table, this is the amount in storage, and in the orders table, it is the amount 
    name,
    price,
    volume,
    percentage,
    type,
    country,
    description?
}

order = {
    beers[]
}
*/

// We could implement deleteMode (if true then) to control whether to drop or not.
//db.exec(`DROP TABLE IF EXISTS X`)
db.exec(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    hashedPassword VARCHAR(100)
)`)