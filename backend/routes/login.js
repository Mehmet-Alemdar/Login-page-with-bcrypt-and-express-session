const router = require("express").Router()

router.get("/", (req,res) => {
  res.send("login page")
})

module.exports = router