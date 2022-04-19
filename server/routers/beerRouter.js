import express from "express" 
const router = express.Router() 
import {readAllBeers, deleteBeer, createBeers, updateSellBeers} from "../database/beers/crudBeer.js"

router.get("/api/beers", async (req, res) => {
    const beers = await readAllBeers()
    res.send(beers)
})

router.post("/api/beers/purchase", (req, res) => {
    updateSellBeers(req.body)
    res.send({})
})

export default router