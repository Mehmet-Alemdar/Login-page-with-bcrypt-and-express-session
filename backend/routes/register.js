const router = require("express").Router()
const createHashedPassword = require("../lib/bcrypt")

router.get("/", (req,res) => {
  res.send("register page")
})

router.post("/", async (req,res) => {
  try{
    const object = req.body
  
    const hashedPassword = await createHashedPassword(object.password)
  
    object.password = hashedPassword
  
    res.status(201).json({msg: "User created"})
  }catch(err) {
    res.send({msg: err})
  }
})

module.exports = router
