const express = require("express")
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const authRoutes = require("./routes/auth.routes")
var cors = require("cors")
// const keys = require('./keys')
const app = express()

app.use(cors())
app.use(authRoutes)

// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static("dist"))

app.get("/", function(req, res) {
  res.sendFile("/dist/index.html")
})

// mongoose.connect(keys.MONGO_URI)
//     .then(() => console.log('MongoDB sucsessfuly connected'))
//     .catch(error => console.error(error))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

module.exports = app
