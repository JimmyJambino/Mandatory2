import db from "../createConnection.js"
// Search available beers (amount != 0), by name or other keywords (Looking at every varchar inside the rows, such as name, type, country, description)
// By Relevance, how many columns does it match? Is the search included in just one column or all 4?

async function readAll() {
    const result = await db.all('SELECT * FROM beers') // all is for all cases, where db.get is for first instance.
    console.log(result)
    return result
}
function printWhatever() {
    console.log("Hello Print")
}

// read searches

//export default {readAll}
export default {readAll, printWhatever}