import express from "express" 
const router = express.Router() 
import readBeer from "../database/beers/readBeer.js"

router.get("/api/beers", async (req, res) => {
    const beers = await readBeer.readAll()
    res.send(beers)
})

export default router