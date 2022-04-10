import express from "express"
const app = express()
//app.use(express.static("public")) not using it yet.
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Express server connection established.")
})