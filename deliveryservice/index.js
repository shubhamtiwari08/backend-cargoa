const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')

const deliveryRoutes = require('../deliveryservice/src/routes/deliveryRoutes')
const { initializeDatabase } = require("../deliveryservice/src/db/db.connection");

initializeDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())




app.use('/',deliveryRoutes)



app.listen(process.env.PORT || 5000 , () => console.log("server is running"))



