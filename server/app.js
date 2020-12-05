const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
const cors = require('cors')
const keys = require('./keys')
const app = express()

app.use(cors())

mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB sucsessfuly connected'))
    .catch(error => console.error(error))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api/auth', authRoutes)


module.exports = app

