import db from "../createConnection.js"

db.run("INSERT INTO orders (customerId) VALUES (?)", 4)