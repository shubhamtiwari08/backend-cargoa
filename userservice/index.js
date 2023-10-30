const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')

const userRoutes = require('../userservice/src/routes/userRoutes')
const { initializeDatabase } = require("../userservice/src/db/db.connection");

initializeDatabase()

app.use(express.json())
app.use(cors())




app.use('/users',userRoutes)



app.listen(process.env.PORT || 3000 , () => console.log("server is running"))


