import db from "../createConnection.js"

db.run('DELETE FROM customers WHERE id=5')