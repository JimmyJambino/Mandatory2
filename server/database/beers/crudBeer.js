import db from "../createConnection.js"

export async function createBeer(beer) { 
    db.run(`INSERT INTO beers (name, amount, price, volume, percentage, type, country, imgURL, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        beer.name, beer.amount, beer.price, beer.volume, beer.percentage, beer.type, beer.country, beer.imgURL, beer.description)   
}

export async function readAllBeers() {
    const result = await db.all(`SELECT * FROM beers`) 
    return result
}

export function deleteBeer(id) {
    db.run(`DELETE FROM beers WHERE id = ?`, id)
}

export function updateSellBeers(beers) {
    beers.forEach(beer => {
        db.run(`UPDATE beers SET amount = amount - 1 WHERE id=?`, beer.id)
    });
}

// Missing update beer information besides amount.