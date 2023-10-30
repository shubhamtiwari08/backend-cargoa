const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')

const userRoutes = require('../vendorservice/src/routes/vendorRoutes')
const { initializeDatabase } = require("../vendorservice/src/db/db.connection");

initializeDatabase()

app.use(express.json())
app.use(cors())




app.use('/users',userRoutes)



app.listen(process.env.PORT || 4000 , () => console.log("server is running"))



