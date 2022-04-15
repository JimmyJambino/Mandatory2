import sqlite3 from "sqlite3"
import {open} from "sqlite"

const db = await open({
    filename: "beerlicious.db",
    driver: sqlite3.Database
})
db.get(`PRAGMA foreign_keys = ON`)

export default db