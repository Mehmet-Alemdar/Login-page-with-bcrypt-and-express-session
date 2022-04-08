const express = require("express")
const { registerRouter, loginRouter, profileRouter } = require("./routes")

require("./mongo-connection")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use("/profile", profileRouter)

app.get("/", (req,res) => {
  res.redirect("/login")
})

module.exports = app