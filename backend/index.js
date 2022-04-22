const express = require("express")
const cors = require("cors")
const session = require("express-session")
const store = new session.MemoryStore()

const { registerRouter, loginRouter, profileRouter } = require("./routes")

require("./mongo-connection")

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(cors({
  origin:['http://localhost:3006'],
  methods:['GET','POST'],
  credentials: true
}));
app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);
app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use("/profile", profileRouter)

app.get("/", (req,res) => {
  res.redirect("/login")
})

module.exports = app