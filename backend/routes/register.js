const router = require("express").Router()
const { createHashedPassword } = require("../lib/bcrypt")
const { UserService } = require("../services")

router.get("/", (req,res) => {
  res.send("register page")
})

router.post("/", async (req,res) => {
  try{
    const object = req.body.user

    const checkEmail = await UserService.findByEmail(object.email)

    if(checkEmail) {
      res.status(203).json({ msg: "This email address is already registered" })
    }else {
      const hashedPassword = await createHashedPassword(object.password)
  
      object.password = hashedPassword
  
      const user = await UserService.save(object)
      
      res.status(201).json({msg: "User created", user})
    }
    
  }catch(err) {
    res.send({msg: err})
  }
})

module.exports = router
