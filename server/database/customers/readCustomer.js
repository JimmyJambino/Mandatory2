import db from "../createConnection.js"

async function readAll() {
    const result = await db.all('SELECT * FROM customers') // all is for all cases, where db.get is for first instance.
    //console.log(result)
    return result
}
const testExport = 5
console.log(await readAll())

export default {readAll, testExport}