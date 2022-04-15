# Mandatory2

TODO: 
Frontend: Cart functionality
Once testing that all CRUD functions work individually, assimilate each category into their own single CRUD.js, fx customerCRUD.js

Install packages:
dotenv
nodemailer
sqlite
sqlite3
bcrypt
session-express
express-rate-limit
helmet(?)

Notes for hashing:
The "real" password is not saved in the database anywhere, only the hashed password.
Apply single-page application thingy. Otherwise we can't immediately go to a certain path unless we use the navigator. write --single after sirv
^this also works in rollup? even tho it says it doesn't recognize the option.