import db from "./createConnection.js"

db.exec(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    hashedPassword VARCHAR(100) NOT NULL
);`)

db.exec(`CREATE TABLE IF NOT EXISTS beers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    amount INTEGER NOT NULL DEFAULT 0,
    price DOUBLE NOT NULL,
    volume DOUBLE NOT NULL,
    percentage DOUBLE NOT NULL,
    type VARCHAR(50) NOT NULL,
    country VARCHAR(100) NOT NULL,
    imgURL VARCHAR(200), 
    description VARCHAR(150)
);`)

db.exec(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customerId INTEGER NOT NULL,
    FOREIGN KEY(customerId) REFERENCES customers(id)
);`)

db.exec(`CREATE TABLE IF NOT EXISTS order_beers (
    orderId INTEGER NOT NULL,
    beerId INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    FOREIGN KEY(orderId) REFERENCES orders(id),
    FOREIGN KEY(beerId) REFERENCES beers(id)
);`)