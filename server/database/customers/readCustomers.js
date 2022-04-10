import db from "../createConnection.js"

const result = await db.all('SELECT * FROM customers') // all is for all cases, where db.get is for first instance.
console.log(result)