const express = require("express")

require("./mongo-connection")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = app