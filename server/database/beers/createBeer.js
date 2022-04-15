import db from "../createConnection.js"
/*
beer = {
    id,
    name,
    amount, // In the beers table, this is the amount in storage, and in the orders table, it is the amount?
    price, // in DKK
    volume, // in cl
    percentage,
    type,
    country,
    description?
}*/

class Beer {
    constructor(name, amount, price, volume, percentage, type, country, imgURL, description) { // relevance at the end? check if description is null, then apply accordingly.
        this.name = name
        this.amount = amount
        this.price = price
        this.volume = volume
        this.percentage = percentage
        this.type = type
        this.country = country
        this.imgURL = imgURL
        this.description = description
    }
}

// Beers also need a picture?
const beers = [
    new Beer("Heineken Original", 10, 7, 33, 4.2, "Lager", "The Netherlands", 
    "https://cdn1.bevco.dk/thumbnail/6a/b3/8d/1642080458/heineken-pilsner-4-6-24x33-cl-daase-9791a_644x644.png"),
    new Beer("Carlsberg Pilsner", 15, 5, 33, 5.5, "Pilsner", "Denmark", 
    "https://cdn1.bevco.dk/thumbnail/1a/70/e4/1645100423/carlsberg-pilsner-4-6-30x33-cl-flaske-53d7e_644x644.png"),
    new Beer("Pink Lemon Daze", 20, 40, 33, 4.8, "Weisse", "England", 
    "https://www.wine-searcher.com/images/labels/25/70/11382570.jpg?width=260&height=260&fit=bounds&canvas=260,260", 
    "Strawberry Lemon Daquiri Berliner Weisse")
]
//beers.forEach(elem => {console.log(elem.name)})

async function createDummyBeers() { // To fill out the database for testing, later to actually fill out the database with pre-made beers.
    beers.forEach(beer => {
        db.run(`INSERT INTO beers (name, amount, price, volume, percentage, type, country, imgURL, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        beer.name, beer.amount, beer.price, beer.volume, beer.percentage, beer.type, beer.country, beer.imgURL, beer.description)
    })
}

createDummyBeers()
